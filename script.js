const cards = [];

const flipSound = new Audio("sounds/flip.mp3");
flipSound.volume = 0.4;

for (let i = 1; i <= 21; i++) {
  const num = String(i).padStart(2, "0");
  cards.push(`images/tarot-${num}.png`);
}

/* =======================
   CARD 1
======================= */
const card1 = document.getElementById("card1");
const tarotImage1 = document.getElementById("tarotImage1");

let isFront1 = false;
let locked1 = false;

card1.addEventListener("click", () => handle(1));

/* =======================
   CARD 2
======================= */
const card2 = document.getElementById("card2");
const tarotImage2 = document.getElementById("tarotImage2");

let isFront2 = false;
let locked2 = false;

card2.addEventListener("click", () => handle(2));

/* =======================
   CARD 3
======================= */
const card3 = document.getElementById("card3");
const tarotImage3 = document.getElementById("tarotImage3");

let isFront3 = false;
let locked3 = false;

card3.addEventListener("click", () => handle(3));

/* =======================
   SHARED LOGIC
======================= */
function handle(n) {
  if (n === 1) run(card1, tarotImage1, 1);
  if (n === 2) run(card2, tarotImage2, 2);
  if (n === 3) run(card3, tarotImage3, 3);
}

function run(card, img, n) {
  let isFront = window["isFront" + n];
  let locked = window["locked" + n];

  if (locked) return;

  window["locked" + n] = true;

  if (!isFront) {
    drawCard(img);
    card.classList.add("flipped");

    flipSound.currentTime = 0;
    flipSound.play();

    window["isFront" + n] = true;

    setTimeout(() => {
      window["locked" + n] = false;
    }, 800);

  } else {
    card.classList.remove("flipped");

    flipSound.currentTime = 0;
    flipSound.play();

    window["isFront" + n] = false;

    setTimeout(() => {
      window["locked" + n] = false;
    }, 800);
  }
}

function drawCard(img) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  img.src = cards[randomIndex];
}