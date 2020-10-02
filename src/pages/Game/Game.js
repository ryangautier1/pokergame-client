import React, { useEffect } from 'react';
import './style.css';

function Game() {

  let c;

  useEffect(()=> {
    c = document.getElementById("game").getContext("2d");
    init();
    animate();
  })

  function Card(status, suit, num) {
    this.status = status;
    this.suit = suit;
    this.num = num;

    this.draw = function() {
      c.beginPath();
      c.moveTo(300, 375);
      c.lineTo(350, 300);
      c.lineTo(300, 300);
      c.closePath();
      c.fillStyle = '#fff';
      c.fill();
      c.strokeStyle = '#fff';
      c.stroke();
    }

    this.update = function() {
      this.draw();
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, 600, 400);
    for (let i=0; i<cardArray.length; i++) {
      cardArray[i].update();
    }
  }

  let cardArray;
  function init() {
    cardArray = [];
    cardArray.push(new Card());
    cardArray.push(new Card());
  }

  return (
    <div>
      <canvas className="game-canvas" id="game"></canvas>
    </div>
  )
}

export default Game;