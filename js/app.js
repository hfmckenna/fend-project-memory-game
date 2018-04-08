let timer = {
  seconds : 0,
  secondsContent : document.getElementById('seconds'),
  interval : 0,
  increment : undefined
}

const overlayElement = document.querySelector("#finalScores");
let currentCardClass;
function secondsCounter() {
  timer.seconds += 1;
  timer.secondsContent.textContent = timer.seconds;
}

let memGameInit = {
  deckOfCards: document.getElementsByClassName("card-image"),
  deckOfCardParents: document.getElementsByClassName("card"),
  deckListener: document.querySelector(".deck"),
  randomClassStyles: [ //shuffleClassStyles shuffles this in place, no separate returned array
    "fa-anchor",
    "fa-anchor",
    "fa-bicycle",
    "fa-bicycle",
    "fa-bolt",
    "fa-bolt",
    "fa-bomb",
    "fa-bomb",
    "fa-cube",
    "fa-cube",
    "fa-diamond",
    "fa-diamond",
    "fa-leaf",
    "fa-leaf",
    "fa-paper-plane-o",
    "fa-paper-plane-o"
  ],
  shuffleClassStyles: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  removeClassStyles: function () { //Separate step to remove all styling on reset
    const differentCardStyles = ['open', 'match', 'show', 'fail'];
    for (let i = 0; i < memGameInit.deckOfCardParents.length; i++) {
      memGameInit.deckOfCardParents[i].classList.remove(...differentCardStyles);
    }
    for (let i = 0; i < memGameInit.deckOfCards.length; i++) {
      memGameInit.deckOfCards[i].classList.remove(...memGameInit.randomClassStyles);
    }
  },
  applyClassStyles: function () { //Separate step to add random styling on reset
    for (let i = 0; i < memGameInit.deckOfCards.length; i++) {
      memGameInit.deckOfCards[i].classList.add(memGameInit.randomClassStyles[i]);
    }
  }
};
//Object specific to game "scores"
let memGameValues = {
  moveCounter: 0,
  lastCardValue: null,
  starRating: 3
};

//Lots of conditions to trigger on a single click, will need tidying up and more condsideation made for the event loop
memGameInit.deckListener.addEventListener("click", function (e) {
  if (e.target.classList[0] !== 'deck') {
  currentCardClass = e.target.querySelector("i").classList[2]; //Find the value of the randomised class
  document.getElementsByClassName('moves')[0].textContent = memGameValues.moveCounter;
  if (memGameValues.moveCounter === 0) {
    timer.increment = setInterval(secondsCounter, 1000);
  }
  if (e.target !== memGameValues.lastCardValue) { //if statement prevents double clicks on same class, needs refinement
    switch (true) { //Two switch statements, look into different methods that don't use breaks
      case !memGameValues.lastCardValue:
        e.target.classList.add("open")
        e.target.classList.add("show")
        memGameValues.lastCardValue = e.target
        memGameValues.moveCounter++
          break;
      case memGameValues.lastCardValue.querySelector("i").classList[2] !== currentCardClass &&
      memGameValues.lastCardValue !== null:
        e.target.classList.add("fail")
        e.target.classList.add("show")
        memGameValues.lastCardValue.classList.remove("open")
        memGameValues.lastCardValue.classList.remove("show")
        setTimeout(function () {
          e.target.classList.remove("fail");
          e.target.classList.remove("show");
        }, 1000)
        memGameValues.lastCardValue = null
        break;
      case memGameValues.lastCardValue.querySelector("i").classList[2] === currentCardClass:
        e.target.classList.add("match")
        memGameValues.lastCardValue.classList.add("match")
        memGameValues.lastCardValue.classList.remove("open")
        memGameValues.lastCardValue.classList.remove("show")
        memGameValues.lastCardValue = null
        
        console.log(document.querySelectorAll('.match').length)
        if (document.querySelectorAll('.match').length === 16) {
          document.getElementById('starFinal').textContent = memGameValues.starRating;
          document.getElementById('movesFinal').textContent = memGameValues.moveCounter;
          clearInterval(timer.increment);
          openOverlay();
        }
        break;
    }
  };
  const starElement = document.getElementsByClassName('stars')[0];
  switch (true) {
    case (memGameValues.moveCounter === 16) && memGameValues.lastCardValue !== null:
      starElement.getElementsByClassName('fa-star')[0].classList.remove('fa-star')
      memGameValues.starRating--
        break;
    case (memGameValues.moveCounter === 32) && memGameValues.lastCardValue !== null:
      starElement.getElementsByClassName('fa-star')[0].classList.remove('fa-star')
      memGameValues.starRating--
        break;
    case (memGameValues.moveCounter === 48) && memGameValues.lastCardValue !== null:
      starElement.getElementsByClassName('fa-star')[0].classList.remove('fa-star')
      memGameValues.starRating--
        break;
  }
}});

function initialiseGame() { //another large function that could be implemented with other events than a single trigger
  memGameValues.moveCounter = 0;
  memGameValues.lastCardValue = null;
  clearInterval(timer.increment)
  timer.seconds = 0;
  timer.secondsContent.textContent = timer.seconds;
  const starElement = document.getElementsByClassName('stars')[0];
  for (let i = 0; i < starElement.querySelectorAll('i').length; i++) {
    starElement.querySelectorAll('i')[i].classList.add('fa-star');
  }
  memGameInit.shuffleClassStyles(memGameInit.randomClassStyles);
  memGameInit.removeClassStyles();
  memGameInit.applyClassStyles();
  document.getElementsByClassName('moves')[0].textContent = memGameValues.moveCounter;
  closeOverlay();
};

initialiseGame();

const restartButtons = document.querySelectorAll('.restart');
restartButtons[0].addEventListener('click', initialiseGame);
restartButtons[1].addEventListener('click', initialiseGame);



function openOverlay() {
  overlayElement.classList.add("finalOverlay");
}

function closeOverlay() {
  overlayElement.classList.remove("finalOverlay");
}