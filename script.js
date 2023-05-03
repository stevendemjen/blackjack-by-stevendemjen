"use strict";
let cardsInDeck = [
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
const newButton = document.querySelector(".btn--new");
const message = document.getElementById("message");

let player0 = [];
let player1 = [];
let player0Score = 0;
let player1Score = 0;
let activePlayer = 0;

const refreshScore = function (scoreEl, player) {
  scoreEl.textContent = player;
};
const hideHitAndStandButton = function (hit, stand) {
  hit.classList.add("hidden");
  stand.classList.add("hidden");
};
const hideDealRevealHitStand = function (deal, hit, stand) {
  deal.classList.add("hidden");
  hit.classList.remove("hidden");
  stand.classList.remove("hidden");
};

const revealCard = function (image, player, cardIndex) {
  image.src = `/cards/${player[cardIndex]}.png`;
};

const drawCard = function (player) {
  const random = Math.floor(Math.random() * cardsInDeck.length);
  player.push(cardsInDeck[random]);
  cardsInDeck.splice(random, 1);
};
const computeScore0 = function () {
  player0Score = 0;
  for (let i = 0; i <= player0.length - 1; i++) {
    if (Number(player0[i].charAt(0))) {
      player0Score += Number(player0[i].charAt(0));
    } else if (
      player0[i] === "ace_of_spades" ||
      player0[i] === "ace_of_clubs" ||
      player0[i] === "ace_of_hearts" ||
      player0[i] === "ace_of_diamonds"
    ) {
      player0Score += 11;
    } else {
      player0Score += 10;
    }
  }
};
const computeScore1 = function () {
  player1Score = 0;
  for (let i = 0; i <= player1.length - 1; i++) {
    if (Number(player1[i].charAt(0))) {
      player1Score += Number(player1[i].charAt(0));
    } else if (
      player1[i] === "ace_of_spades" ||
      player1[i] === "ace_of_clubs" ||
      player1[i] === "ace_of_hearts" ||
      player1[i] === "ace_of_diamonds"
    ) {
      player1Score += 11;
    } else {
      player1Score += 10;
    }
  }
};

//player 1 draws cards
deal0Button.addEventListener("click", function () {
  drawCard(player0);
  drawCard(player0);
  revealCard(imgp0c0, player0, 0);
  revealCard(imgp0c1, player0, 1);
  hideDealRevealHitStand(deal0Button, hit0Button, stand0Button);
  computeScore0();
  refreshScore(score0El, player0Score);
});
hit0Button.addEventListener("click", function () {
  drawCard(player0);
  revealCard(imgp0c2, player0, 2);
  imgp0c2.classList.remove("hidden");
  computeScore0();
  refreshScore(score0El, player0Score);
  if (player0Score > 21) {
    player0El.classList.add("player--bust");
    bust0.classList.remove("hidden");
    hideHitAndStandButton(hit0Button, stand0Button);
  }
});

stand0Button.addEventListener("click", function () {
  player0El.classList.remove("player--active");
  player1El.classList.add("player--active");
  deal1Button.classList.remove("hidden");
  hit0Button.classList.add("hidden");
  stand0Button.classList.add("hidden");
});

deal1Button.addEventListener("click", function () {
  drawCard(player1);
  drawCard(player1);
  revealCard(imgp1c0, player1, 0);
  revealCard(imgp1c1, player1, 1);
  hideDealRevealHitStand(deal1Button, hit1Button, stand1Button);
  computeScore1();
  refreshScore(score1El, player1Score);
});

hit1Button.addEventListener("click", function () {
  drawCard(player1);
  revealCard(imgp1c2, player1, 2);
  imgp1c2.classList.remove("hidden");
  computeScore1();
  refreshScore(score1El, player1Score);
  if (player1Score > 21) {
    player1El.classList.add("player--bust");
    bust1.classList.remove("hidden");
    hideHitAndStandButton(hit1Button, stand1Button);
  }
});

stand1Button.addEventListener("click", function () {
  hideHitAndStandButton(hit1Button, stand1Button);
  //determine winner
  if (player0Score > player1Score) {
    message.classList.remove("hidden");
    message.textContent = "🏆 Player 1 won the game!";
  } else if (player0Score < player1Score) {
    message.classList.remove("hidden");
    message.textContent = "🏆 Player 2 won the game!";
  } else {
    message.classList.remove("hidden");
    message.textContent = "🤝It's a draw!";
  }
});

newButton.addEventListener("click", function () {
  message.classList.add("hidden");
  imgp0c0.src = "img/card_back_red.png";
  imgp0c1.src = "img/card_back_red.png";
  imgp1c0.src = "img/card_back_red.png";
  imgp1c1.src = "img/card_back_red.png";
  imgp0c2.classList.add("hidden");
  imgp1c2.classList.add("hidden");
  player0 = [];
  player1 = [];
  player0Score = 0;
  player1Score = 0;
  refreshScore(score0El, player0Score);
  refreshScore(score1El, player1Score);
  deal0Button.classList.remove("hidden");
  player0El.classList.remove("player--bust");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--bust");
  player1El.classList.remove("player--active");
  bust0.classList.add("hidden");
  bust1.classList.add("hidden");
  cardsInDeck = [
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
});
