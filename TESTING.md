# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate my HTML file.

Result:

- Pass: No Errors.

![html-validator](documentation/html-validator.png)

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file.

Result:

- Pass: No Errors (one warning about imported fonts).

![CSS Validation One](documentation/css-validate-one.png)

![CSS Validation One](documentation/css-validate-two.png)

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate each of my JS files.

Result for script.js:

- Pass: No Errors (note about flagData variable which is the dictionary in data.js).

![script.js Validation](documentation/js-validator.png)

Result for data.js:

- Pass: No Errors (note about flagData variable which is the dictionary).

![data.js Validation](documentation/js2-validator.png)

## Browser Compatibility

I've tested my deployed project on Chrome, Edge and Safari to check for compatibility issues.

I tested each browser on the homepage and at each stage of the game and have provided a summary of these tests below with a screenshot of the homepage or game-play.

| Browser | Home / Game | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/chrome.png) | Works as expected |
| Edge | ![screenshot](documentation/edge.png) |  Works as expected |
| Safari | ![screenshot](documentation/safari.png) | Works as expected |


## Responsiveness

I deployed the project early on and tested on three of my own devices throughout the development process:

- Moto (g8) power
- HP Desktop (24")
- MacBook Air (13")

I also used Dev Tools to test on a tablet device.

I tested the responsiveness of the homepage and each stage of the game and have provided a summary of these tests below with a screenshot of the homepage or game-play.

| Device | Home /Game | Notes |
| --- | --- | --- |
| Moto(g8) mobile (own) | ![screenshot](documentation/moto-g8.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/ipad.png) | Works as expected |
| MacBook Air (own) | ![screenshot](documentation/macbook-air.png) | Works as expected |
| HP Desktop (own) | ![screenshot](documentation/hp-desktop.png) | Works as expected|


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

Results for mobile devices are 91% and above.

![mobile test](documentation/lhouse-mobile.png)

Reesults for desktop devices are 90% and above.

![desktop test](documentation/lhouse-desktop.png)

## Defensive Programming

Defensive programming has been manually tested and the Pass/Fail outcomes summarised below.

All stages of the game are played on the homepage with stages hidden / unhidden as the game progresses.

| Page | User Action | Expected Result | Pass/Fail | Comments | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Home | | | | |
| | Hover over Start button | Start button background colour (bgc) will turn light blue to indicate active.| Pass |The hover-over function has passed on all buttons ie. answer buttons, Next, Restart and Play Again.|  ![screenshot](documentation/defensive-testing/hover-start.png)|
| | Click on Start button | Question 1/20 is displayed with a flag image and 3 answer buttons. | Pass | |![screenshot](documentation/defensive-testing/question1.png) |
| | Click on correct answer button | Correct answer button bgc will turn green; other 2 answer buttons will turn red; score will increment by 1; Next and Restart buttons will display.| Pass | | ![screenshot](documentation/defensive-testing/answer-q1.png)|
| | Click on Next button|Question 2/20 is displayed (and so on) with a new flag image and 3 answer buttons.  | Pass | |![screenshot](documentation/defensive-testing/question2.png) |
| | Click on incorrect answer button. |Incorrect answer button bgc will turn red; second incorrect answer button bgc will turn red; correct answer button bgc will turn green; score does not change; Next and Restart buttons will display.| Pass | | ![screenshot](documentation/defensive-testing/incorrect-answer.png) |
| | Click on Restart button | New flag will display with 3 answer buttons; Question 1/20 is displayed; Score 0 is displayed.| Pass | | ![screenshot](documentation/defensive-testing/restart-game.png) |
| |Click on answer button at Question 20/20 | Total Score Message and Score are displayed; Play Again button is displayed| Pass | | ![screenshot](documentation/defensive-testing/question20.png) |
| | Click on Play Again button |New flag will display with 3 answer buttons; Question 1/20 is displayed; Score 0 is displayed.| Pass | | ![screenshot](documentation/defensive-testing/play-again.png) |

## Bugs

- Issue: When clicking on Restart or Play Again, a new flag was displayed but the 3 answer buttons were not active when clicked.

  - Fix: In JS, regarding the `restartGame()` function, I had not called the `enableButtons()` function. I therefore added this at line 97, see:

    ![screenshot](documentation/bug-1.png)

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

  - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

  - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

  - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

  - To fix this, I _____________________.

## Unfixed Bugs

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

  - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

There are no remaining bugs that I am aware of.
