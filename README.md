# Memory Game Project

## Table of Contents

* [Description](#Description)
* [Instructions](#Instructions)
* [Technical](#Technical)

## Description

The classic memory game format, the dealer shuffles the deck and deals 8 pairs of cards to you at random. You can then reveal a card by clicking on it, click on another to try and find it's mate. If you succeed, then you've got a pair! If not both cards are hidden from you again. A great test of your memory as you see if you can remember where each card is while you continue looking.

## Instructions

- A timer starts when you click on the first card.
- The quicker you find all 8 pairs the better your star rating.
- Press the circled arrow to restart the game at any time and get dealt a fresh deck of cards. Click 'Play Again' to do the same on completion.

## Technical

*Please Note:* This game will only work in browsers that are ES6 compliant. Simply clone the project into a local directory then visit that directory within your browser to play. An internet connection will be required to play this game, the card patterns are in fact downloaded from [Font Awesome](https://fontawesome.com/).

### References

The core components of this app were taken from the original Udacity assets, including the HTML & CSS. Some styling changes were implemented but the core 4x4 grid was considered the ideal format.

- Inspiration for the overlay was taken from [W3C](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp)
- My initial understanding for the timer came from various Stackoverflow posts about setInterval but it was the [explanation in MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) that led me to the solution of how to clear the timer on reset.
- After reading numerous arguments about the performance of switch statements and nested if/else I felt the switch statement was ultimately easier to read.

### Acknowledgments

Thanks to Richard Kalehoff for creating the original version of this game.