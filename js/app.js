let memGameInit = {
    randomClassStyles: [
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
    shuffleClassStyles: function(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    applyClassStyles: function() {
      const deckOfCards = document.getElementsByClassName("card-image");
      for (let i = 0; i < deckOfCards.length; i++) {
        deckOfCards[i].classList.add(memGameInit.randomClassStyles[i]);
      }
    }
  };
  let memGameValues = {
    turnCounter: 0,
    moveCounter: 0,
    lastCardValue: null
  };
  
  const deckListener = document.querySelector(".deck");
  
  deckListener.addEventListener("click", function(e) {
    const currentCardClass = e.target.querySelector("i").classList[2];
    if (e.target !== memGameValues.lastCardValue) {
    switch (true) {
      case memGameValues.turnCounter === 0 && !memGameValues.lastCardValue:
        // start timer
        e.target.classList.add("open")
        e.target.classList.add("show")
        memGameValues.lastCardValue = e.target
        memGameValues.turnCounter++
        console.log(1)
        break;
      case memGameValues.turnCounter > 0 && !memGameValues.lastCardValue:
        e.target.classList.add("open")
        e.target.classList.add("show")
        memGameValues.lastCardValue = e.target
        memGameValues.turnCounter++
        console.log(2)
        break;
      case memGameValues.lastCardValue.querySelector("i").classList[2] === currentCardClass:
        e.target.classList.add("match")
        memGameValues.lastCardValue.classList.add("match")
        memGameValues.lastCardValue.classList.remove("open")
        memGameValues.lastCardValue.classList.remove("show")
        memGameValues.lastCardValue = null
        console.log(3)
        break;
      case memGameValues.lastCardValue.querySelector("i").classList[2] !== currentCardClass &&
        memGameValues.lastCardValue !== null:
        e.target.classList.add("fail")
        e.target.classList.add("show")
        memGameValues.lastCardValue.classList.remove("open")
        memGameValues.lastCardValue.classList.remove("show")
        setTimeout(function (){
        e.target.classList.remove("fail");
        e.target.classList.remove("show");},1000)
        memGameValues.lastCardValue = null
        console.log(4)
        break;
    }
    };
  });
  memGameInit.shuffleClassStyles(memGameInit.randomClassStyles);
  memGameInit.applyClassStyles();