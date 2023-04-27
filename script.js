// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//BLACK JACK
const cardsInDeck = [
  "ten_of_clubs",
  "ten_of_diamonds",
  "ten_of_hearts",
  "ten_of_spades",
  "2_of_clubs",
  "2_of_diamonds",
  "2_of_hearts",
  "2_of_spades",
  "3_of_clubs",
  "3_of_diamonds",
  "3_of_hearts",
  "3_of_spades",
  "4_of_clubs",
  "4_of_diamonds",
  "4_of_hearts",
  "4_of_spades",
  "5_of_clubs",
  "5_of_diamonds",
  "5_of_hearts",
  "5_of_spades",
  "6_of_clubs",
  "6_of_diamonds",
  "6_of_hearts",
  "6_of_spades",
  "7_of_clubs",
  "7_of_diamonds",
  "7_of_hearts",
  "7_of_spades",
  "8_of_clubs",
  "8_of_diamonds",
  "8_of_hearts",
  "8_of_spades",
  "9_of_clubs",
  "9_of_diamonds",
  "9_of_hearts",
  "9_of_spades",
  "ace_of_clubs",
  "ace_of_diamonds",
  "ace_of_hearts",
  "ace_of_spades",
  "jack_of_clubs",
  "jack_of_diamonds",
  "jack_of_hearts",
  "jack_of_spades",
  "king_of_clubs",
  "king_of_diamonds",
  "king_of_hearts",
  "king_of_spades",
  "queen_of_clubs",
  "queen_of_diamonds",
  "queen_of_hearts",
  "queen_of_spades",
];
const imgp0c0 = document.querySelector(".card--0--p0");
const imgp0c1 = document.querySelector(".card--1--p0");
const imgp0c2 = document.querySelector(".card--2--p0");
const imgp0c3 = document.querySelector(".card--3--p0");

const imgp1c0 = document.querySelector(".card--0--p1");
const imgp1c1 = document.querySelector(".card--1--p1");
const imgp1c2 = document.querySelector(".card--2--p1");
const imgp1c3 = document.querySelector(".card--3--p1");
const deal0Button = document.querySelector(".btn--deal0");
const deal1Button = document.querySelector(".btn--deal1");
const hit0Button = document.querySelector(".btn--hit0");
const hit1Button = document.querySelector(".btn--hit1");
const stand0Button = document.querySelector(".btn--stand0");
const stand1Button = document.querySelector(".btn--stand1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const bust0 = document.getElementById("bust0");
const bust1 = document.getElementById("bust1");

const player0 = [];
const player1 = [];
let player0Score = 0;
let player1Score = 0;
let activePlayer = 0;

const refreshScore = function () {};

let drawCard = function (player) {
  const random = Math.floor(Math.random() * cardsInDeck.length);
  player.push(cardsInDeck[random]);
  cardsInDeck.splice(random, 1);
};
//player 1 draws cards
deal0Button.addEventListener("click", function () {
  drawCard(player0);
  drawCard(player0);
  imgp0c0.src = `/cards/${player0[0]}.png`;
  imgp0c1.src = `/cards/${player0[1]}.png`;
  deal0Button.classList.add("hidden");
  hit0Button.classList.remove("hidden");
  stand0Button.classList.remove("hidden");
  // derive values of card and add to the score
  for (let i = 0; i <= 1; i++) {
    if (isNaN(player0[i].charAt(0))) {
      player0Score += 10;
    } else {
      player0Score += Number(player0[i].charAt(0));
    }
  }
  score0El.textContent = player0Score;
  //check for bust
  if (player0Score > 21) {
    score0El.textContent = player0Score;
    player0El.classList.add("player--bust");
    bust0.classList.remove("hidden");
    hit0Button.classList.add("hidden");
    stand0Button.classList.add("hidden");
  }
});
hit0Button.addEventListener("click", function () {
  drawCard(player0);

  if (isNaN(player0[2].charAt(0))) {
    player0Score += 10;
  } else {
    player0Score += Number(player0[2].charAt(0));
  }
});
stand0Button.addEventListener("click", function () {
  player0El.classList.remove("player--active");
  player1El.classList.add("player--active");
  deal1Button.classList.remove("hidden");
  hit0Button.classList.add("hidden");
  stand0Button.classList.add("hidden");
  activePlayer = 1;
});

deal1Button.addEventListener("click", function () {
  drawCard(player1);
  drawCard(player1);
  imgp1c0.src = `/cards/${player1[0]}.png`;
  imgp1c1.src = `/cards/${player1[1]}.png`;
  deal1Button.classList.add("hidden");
  hit1Button.classList.remove("hidden");
  stand1Button.classList.remove("hidden");
  // derive values of card
  for (let i = 0; i <= 1; i++) {
    if (isNaN(player1[i].charAt(0))) {
      player1Score += 10;
    } else {
      player1Score += Number(player1[i].charAt(0));
    }
  }
  score1El.textContent = player1Score;
});

stand1Button.addEventListener("click", function () {
  hit1Button.classList.add("hidden");
  stand1Button.classList.add("hidden");
  //determine winner
  if (player0Score > player1Score) {
    console.log("player 1 won the game!");
  } else if (player0Score < player1Score) console.log("player2 won the game!");
  else {
    console.log("Its a draw!");
  }
});
