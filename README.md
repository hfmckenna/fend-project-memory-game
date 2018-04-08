# Memory Game Project

## Table of Contents

* [Comments](#comments)
* [Improvements](#improvements)

## Comments

I've made few modifications to the HTML of the project. Really just relating to the score board and restart buttons. Some CSS has been changed so the game works better on multiple devices. It's not responsive to "accordion" dragging of the browser, as this often made the buttons hard to identify and push. So a single simple media query was added to keep things in a square on screens lack the height to properly represent a square.

The javascript uses a lot of case switching triggered on single event listener. I understand there will be a better way of doing this but at least it avoids too many nested if statements. Will research the role of objects, ternary operators and similar to better understand the role they play in interactivity.

Otherwise I'm happy enough that I've avoided global variables and my objects hopefully follow some kind of logic that makes things easier to follow.

## Improvements

- Would be good to fine tune the CSS to make better use of screen real estate.
- Look at cookies for storing high scores
- Make my javascript less contingent on specific layouts and so easier to update & improve.
- Improve naming conventions in JS.
