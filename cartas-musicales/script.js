console.log("script cargado");

const openBtn = document.getElementById('openBtn');

const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const card5 = document.getElementById('card-5');
const card6 = document.getElementById('card-6');
const card7 = document.getElementById('card-7');
const card8 = document.getElementById('card-8');
const card9 = document.getElementById('card-9');
const card10 = document.getElementById('card-10');
const card11 = document.getElementById('card-11');
function stopCardMedia(card) {
  if (!card) return;
  const audio = card.querySelector('.audio');
  const text = card.querySelector('.hidden-text');

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  if (text) text.classList.remove('show');
}
let animationIndex = 0;

const animations = [
  { enter: "from-right", exit: "exit-left" },
  { enter: "from-bottom", exit: "exit-top" },
  { enter: "from-left", exit: "exit-right" },
  { enter: "from-top", exit: "exit-bottom" }
];
function goToCard(fromCard, toCard) {

  stopCardMedia(fromCard);

  const currentAnimation = animations[animationIndex % animations.length];
  animationIndex++;

  // limpiar clases anteriores
  fromCard.classList.remove("active");
  fromCard.classList.remove(...Object.values(currentAnimation));

  toCard.classList.remove("active");
  toCard.classList.remove(
    "from-right","from-left","from-top","from-bottom",
    "exit-right","exit-left","exit-top","exit-bottom"
  );

  // aplicar salida
  fromCard.classList.add(currentAnimation.exit);

  // preparar entrada
  toCard.classList.add(currentAnimation.enter);

  // pequeño delay para la animación
  setTimeout(() => {
    toCard.classList.add("active");
  }, 10);
}

openBtn.addEventListener('click', () => {
  goToCard(card1, card2);
});

// TODOS los .playMusic
document.addEventListener('click', (e) => {
  // click en imagen
  const img = e.target.closest('.playMusic');
  if (img) {
    const card = img.closest('.card');
    const audio = card.querySelector('.audio');
    const text = card.querySelector('.hidden-text');

    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    if (text) text.classList.add('show');
    return;
  }

  // click en siguiente
  const next = e.target.closest('.next');
  if (next) {
    const currentCard = next.closest('.card');

    if (currentCard.id === "card-2") goToCard(card2, card3);
    else if (currentCard.id === "card-3") goToCard(card3, card4);
    else if (currentCard.id === "card-4") goToCard(card4, card5);
    else if (currentCard.id === "card-5") goToCard(card5, card6);
    else if (currentCard.id === "card-6") goToCard(card6, card7);
    else if (currentCard.id === "card-7") goToCard(card7, card8);
    else if (currentCard.id === "card-8") goToCard(card8, card9);
    else if (currentCard.id === "card-9") goToCard(card9, card10);
    else if (currentCard.id === "card-10") goToCard(card10, card11);
  }
});

const explodeBtn = document.getElementById("explodeBtn");

if (explodeBtn) {
  explodeBtn.addEventListener("click", () => {

    // Animación del centro
    explodeBtn.classList.add("explode");

    const images = document.querySelectorAll(".burst");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 120);
    });

    // Mostrar mensaje después
    setTimeout(() => {
      document.getElementById("finalMessage").classList.add("show");
    }, 1200);
  });
}

const openLetter = document.getElementById("openLetter");
const letterBox = document.getElementById("letterBox");

if (openLetter) {
  openLetter.addEventListener("click", () => {
    letterBox.classList.add("open");
  });
}