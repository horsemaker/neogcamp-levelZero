# lesson-one

## what's CLI?

Well! If you are from a non programming backgroud, there are chances you have never interacted with a CLI app. Those are pretty obsolete now from the end user scene. But programmers use them all the time.

Most of the tools in a programmers toolkit is CLI: github, shell, programming language repls etc. are all CLIs. In strictest terms, if you are interacting with a program via command line (that black thing with text on it which hackers use in movies) then it's a CLI (Command Line INTERFACE).

Think of it as texting with a program instead of you know the usual clicking of buttons.

---

# ex01: output your name

## challenge

Write a program to console your name on the output.

## understand

That it's a thing to show output.

The thing you just logged is called a string. It's one type of data that your language understands.

Solution:

```javascript
console.log("Your Name);
```

---

# ex02: read the name of your user

## challenge

A program to read input from your user. Output this name. Use readlineSync() for this.

add readlineSync() as a dependency
import it in your index.js
know how to read docs and use it. In programming, it is extremely important to read docs.
use a variable to store this name.
output this name.

## understand

readlineSync() is a package. In programming, you can use code written by others via this system.

People share their code out in the open to help others. Using this we write bigger programs. This is called standing on the shoulder of giants. Think of this as someone discovered fire and wheel and now we don't have to rediscover it every other generation.

Concept of variable: Think of it as keeping a placeholder in your room. Now in that place, you can keep a bat, a ball, or anything. Variables are placeholders inside the computer and nothing else.

Solution:

```javascript
prompt('Give me your name') //Browser

var readlineSync = require('readline-sync')

var userName = readlineSync.question('May I have your name?')

console.log(userName)
```

---

# ex03: welcome your user

## challenge

A program to take a string. And add "Welcome" to it. Then console it.

## understand

- manipulating a string,
- using + to concatenate

Solution:

```javascript
var welcomeMessage = 'Welcome' + userName // string concatenation

console.log(welcomeMessage)
```

---

# ex04: do it all together

## challenge

A program to take your user's name. Then welcome them.

## understand

- that programming is nothing but `Input >> Proccessing >> Output`

Solution:

```javascript
var readlineSync = require('readline-sync')

var userName = readlineSync.question('May I have your name?')

var welcomeMessage = 'Welcome' + userName // string concatenation

console.log(welcomeMessage)
```

---

# ex05: print right/wrong if greater than 25

## challenge

Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

## understand

- branching of code, i.e. only one branch runs based on a `CONDITION`

Solution:

```javascript
var readlineSync = require('readline-sync')
// input
var userAnswerAge = readlineSync.question('Am I older than 25? ')
console.log('You entered ' + userAnswerAge)

// processing
if (userAnswerAge === 'yes') {
  // output
  console.log('You are wrong!')
} else {
  // output
  console.log('You are right!')
}
```

---

# ex06: increment score if the right answer

## challenge

Ask your user if your hometown is Bokaro (or your city) and this time increment a variable based on the right answer.

Also, console the score this time.

Solution:

```javascript
var readlineSync = require('readline-sync')

var score = 0

// question 1
var questionOne = 'Am I older than 18? '
var answerOne = 'yes'

// input
var userAnswerAge = readlineSync.question(questionOne)
console.log('You entered ' + userAnswerAge)

// processing
if (userAnswerAge === answerOne) {
  // output
  console.log('You are right!')
  score = score + 1
  console.log('Score is: ' + score)
} else {
  // output
  console.log('You are wrong!')
  score = score - 1
  console.log('Score is: ' + score)
}

// question 2
var questionTwo = 'Are you a boy? '
var answerTwo = 'yes'

// input
var userAnswerGender = readlineSync.question(questionTwo)
console.log('You entered ' + userAnswerGender)

// processing
if (userAnswerAge === answerTwo) {
  // output
  console.log('You are right!')
  score = score + 1
  console.log('Score is: ' + score)
} else {
  // output
  console.log('You are wrong!')
  score = score - 1
  console.log('Score is: ' + score)
}
```

---

# ex07: function to add two numbers

## challenge

Take two numbers and add them. Put this entire thing in a function add() and return the result

syntax

```javascript
function functionName(parameterOne, parameterTwo) {
  // processing
  return outputValue
}
```

## understand

- a function is a repeating piece of the PROCESSING while INPUT and OUTPUT changes

- Note the difference between parameters and arguments:

  - Function parameters are the names listed in the function's definition.
  - Function arguments are the real values passed to the function.

Solution:

```javascript
// Functions

// function to add two numbers
function add(numberOne, numberTwo) {
  console.log('numberOne: ', numberOne)
  console.log('numberTwo: ', numberTwo)
  var sum = numberOne + numberTwo
  console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is : ' + sum)
}

// use the function
add(2, 5)

// function to find product of two numbers
function product(numberOne, numberTwo) {
  console.log('numberOne: ', numberOne)
  console.log('numberTwo: ', numberTwo)
  var product = numberOne * numberTwo
  console.log(
    'The product of ' + numberOne + ' and ' + numberTwo + ' is : ' + product
  )
}

// use the function
product(6, 7)
```

---

# ex08: function to check the answer

## challenge

- Your function should take a question and the right answer.
- Ask your user to answer the question.
- check the answer and increment score (global variable)
- tell your user whether the answer was correct or not

## understand

- A function can do multiple things
- sometimes, the output can be a change in the global variable

# looking back

Up until now, we have a `function()` which is kind of a mini-program to do everything which we need to do.

If you look back now, `console.log()`, `readlineSync() `are all just functions isn't it?

What we need now is a way to run this `mini-program` again and again. And each time with a different question/answer pair.

To do this we need to understand a few things.

Solution:

```javascript
var readlineSync = require('readline-sync')

var score = 0

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log('You were right!')
    score = score + 1
  } else {
    console.log('You were wrong!')
    score = score - 1
  }
}

// calling the function
play('Where do I live? ', 'Mumbai')
play('Which is my favorite series? ', 'Silicon Valley')

console.log('Your SCORE is: ', score)
```

---

Then we go back to `exp06` to improvise our code(Extracting it out as a function i.e breaking programs into smaller parts).

Improved `ex06` looks like this

```javascript
var readlineSync = require('readline-sync')

var score = 0

// question 1
var questionOne = 'Am I older than 18? '
var answerOne = 'yes'

// question 2
var questionTwo = 'Are you a boy? '
var answerTwo = 'yes'

function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(question)
  console.log('You entered ' + userAnswer)

  // processing
  if (userAnswer === answer) {
    // output
    console.log('You are right!')
    score = score + 1
    console.log('Score is: ' + score)
  } else {
    // output
    console.log('You are wrong!')
    score = score - 1
    console.log('Score is: ' + score)
  }
}

play(questionOne, answerOne)
play(questionTwo, answerTwo)
```

---

# ex09: print your name 5 times

## exercise

- print your name 5 times by calling console.log()
- use for loop to do this
- BONUS: Print the number with your name

syntax

```javascript
for (intial CONDITION; exit CONDITION; change CONDITION) {
  // code block to be executed
}
```

## understanding

- anatomy of for loop
- calling a function from the loop is running the mini-program multiple times

Solution:

```javascript
for (var i = 0; i < 5; i = i + 1) {
  console.log('Yash Ghodekar')
}

//extra
for (var i = 0; i <= 10; i = i + 1) {
  console.log(22 + i)
}
```

---

# homework: star pattern

## challenge

a program to take input number from user and print stars like this. The below pattern will be printed when the user enters 5.

```
*
**
***
****
*****
```

Solution:

```javascript
for (var i = 1; i <= number; i++) {
  var str = ''
  for (var j = 1; j <= i; j++) {
    str = str + '*'
  }
  console.log(str)
}
```

BONUS: Can you print this inverted? Like 5 stars > 4 stars > 3...?

Solution:

```javascript
for (var i = number; i >= 1; i--) {
  var str = ''
  for (var j = 1; j <= i; j++) {
    str = str + '*'
  }
  console.log(str)
}
```

## understanding

- double loop: HINT
- struggling to form programs when you don't know-how
- looking around the internet to understand the logic

---

# ex10: list grocery items to buy

## challenge

- prepare a list of grocery items to buy.
- add 5 items
- print the first item on the list.
- print the third item on the list.
- print the last item on the list.

## syntax

```
var arrayName = [valueOne, valueTwo, valueThree];
```

## understanding

- what is a data structure? It's just a way of organizing data in a particular way. In the case of an array, data is arranged sequentially and thus can be accessed using index numbers.

- what is an easy way to think of array? Think of the array like contents of a book. You can see what's there in each chapter from the top and directly go to a chapter when you know the page number. All chapters are in a sequence.

- index-based access, the index starts at 0

- accessing the last element and length property of an array

Solution:

```javascript
var groceryList = ['milk', 'eggs', 'butter', 'bread', 'jam']

console.log(groceryList[0])
console.log(groceryList[2])
console.log(groceryList[4])

// how to print last item of the array
var howLongIsThisArray = groceryList.length
console.log(howLongIsThisArray)
console.log(groceryList[groceryList.length - 1])
```

---

# ex11: print every item on the list

Take the list you made in the last exercise. Now, use a for loop to print every item.

## understanding

- using the loop variable i.e. `i` to access the index
- using length property to terminate the loop
- using `console.log()` function call with different arguments from array!

Solution:

```javascript
var groceryList = [
  'milk',
  'eggs',
  'butter',
  'bread',
  'jam',
  'salt',
  'biscuits',
  'wafers',
]

function printArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

printArray(groceryList)
```

---

# ex12: club info about a superhero together

## exercise

Create two objects and put information about two superheros: superman and batman. Get familiarity with the syntax. Read and understand what's written in understanding section.

# syntax

```
{
  // notice the opening bracket
  key: value;
} // notice the closing bracket
```

## understanding

- how objects work
- the fact that objects mimic real life objects in programming and thus group properties of one object in one. Think of defining a car in programming language, what would be the properties of a car?
- accessing values using keys
- the values inside an object are called object's properties
  notice the dot . notation used to access the properties? One thing to notice here is that console is an object on which log() is a property. And yes, functions too can be a property of object.

* another fact, when functions are properties of an object, they are called methods in programming.

Solution:

```javascript
var superman = {
  name: 'superman',
  power: 'flight',
  costumeColor: 'blue',
  strength: 10000,
  stealth: 0,
  intelligence: 100,
}

var batman = {
  name: 'batman',
  power: 'martial arts',
  costumeColor: 'black',
  strength: 100,
  stealth: 100,
  intelligence: 1000,
}

console.log(superman.strength)
console.log(batman.strength)
console.log(superman.strength > batman.strength)

// challenge 1

// print superman's stealth
console.log("Superman's stealth: " + superman.stealth)
// print batman's stealth
console.log("Batman's stealth: " + batman.stealth)
// compare who would win on stealth
if (superman.stealth > batman.stealth) {
  console.log('Superman will win on stealth.')
} else {
  console.log('Batman will win on stealth.')
}

// challenge 2

// include array, for-loop, function call in your code

// array of superheroes containing an object for each superhero
superheroes = [
  {
    name: 'superman',
    power: 'flight',
    costumeColor: 'blue',
    strength: 10000,
    stealth: 0,
    intelligence: 100,
  },
  {
    name: 'batman',
    power: 'martial arts',
    costumeColor: 'black',
    strength: 1000,
    stealth: 100,
    intelligence: 1000,
  },
  {
    name: 'flash',
    power: 'speed',
    costumeColor: 'red',
    strength: 500,
    stealth: 400,
  },
  {
    name: 'wonder woman',
    power: 'god',
    costumeColor: 'dark red',
    strength: 10000,
    stealth: 0,
  },
]

console.log('----------')

// printing name & costume of every superhero in the array
function printAtrributes(superhero) {
  console.log("Superhero's Name: " + superhero.name)
  console.log(superhero.name + "'s Costume Color: " + superhero.costumeColor)
  console.log('-------------------')
}

for (var i = 0; i < superheroes.length; i++) {
  printAtrributes(superheroes[i])
}
```

---

# ex13: put a list of questions together

```javascript
// hint: there's an error in these objects
// if you copy/paste blindly it won't work
questionOne = {
  question: "Who is my favorite superhero?"
  answer: "Dhruv"
}

questionTwo = {
  question: "Which is my favorite sad song?"
  answer: "Channa Meraya"
}
```

Solution:

```javascript
var questions = [
  {
    question: 'Where do I live? ',
    answer: 'Mumbai',
  },
  {
    question: 'Which is my favorite series? ',
    answer: 'Silicon Valley',
  },
]
```

---

# ex14: club everything to make the game

## challenge

- use question list
- and function to put together a quiz

# understand

- all programs are made up of mini functions and data structures
- learning to break a program into parts and then sewing them together is the real learning

Solution:

```javascript
var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName + ' to - DO YOU KNOW Yash?')

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log('right!')
    score = score + 1
  } else {
    console.log('wrong!')
  }

  console.log('current score: ', score)
  console.log('-----------------')
}

// array of objects
var questions = [
  {
    question: 'Where do I live? ',
    answer: 'Mumbai',
  },
  {
    question: 'Which is my favorite series? ',
    answer: 'Silicon Valley',
  },
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
```

---

# ex15: print the final score to the user

## challenge

- In your program, create a data structure to hold high scores.
- Show user his score and high scores.
- Ask the user to send a screenshot if he has beaten the score.

## understanding

- you can use data structures to hold data
- when you start writing this data structure to files it becomes a database
- we will learn about writing to DB later.

Solution:

```javascript
var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName + ' to - DO YOU KNOW Yash?')

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log('right!')
    score = score + 1
  } else {
    console.log('wrong!')
  }

  console.log('current score: ', score)
  console.log('-----------------')
}

// array of objects
var questions = [
  {
    question: 'Where do I live? ',
    answer: 'Mumbai',
  },
  {
    question: 'Which is my favorite series? ',
    answer: 'Silicon Valley',
  },
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

//We added the statement below exp14 code
console.log('YAY! You SCORED: ', score)
```

Feel free to try this out by clicking https://replit.com/@horsemaker/end-game?embed=1&output=1

---

After doing the required changes, here's the code:

```javascript
var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName + ' to - DO YOU KNOW Yash?')

// data of high score
var highScores = [
  {
    name: "Yash's Mom",
    score: 11,
  },
  {
    name: 'Yash',
    score: 10,
  },
  {
    name: 'Vedant',
    score: 9.5,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Right! Seems like you really know Yash.')
    score = score + 1
  } else {
    console.log('Oops! the correct answer is ' + answer)
    console.log('And you call yourself my friend?')
  }

  console.log('Current Score: ', score)
  console.log('-----------------')
}

// array of objects
var questions = [
  {
    question: 'Where do I live? ',
    answer: 'Mumbai',
  },
  {
    question: 'Which is my favorite series? ',
    answer: 'Silicon Valley',
  },
  {
    question: 'Who is my oldest friend? ',
    answer: 'Vedant',
  },
  {
    question: 'What is my favorite subject? ',
    answer: 'Psychology',
  },
  {
    question: 'Which is my favorire cartoon character? ',
    answer: 'Pink Panther',
  },
  {
    question: 'MCU or DC? ',
    answer: 'MCU',
  },
  {
    question: 'Who is my favorite MCU character? ',
    answer: "that it's a Trick Question - It's everybody!",
  },
  {
    question: 'What is my favorite season? ',
    answer: 'Autumn',
  },
  {
    question: 'Which is my favorite drink? ',
    answer: 'जल',
  },
  {
    question: "Here's the last question - Which is my favorite song? ",
    answer: 'Ai Meri Zohrajabeen',
  },
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log('YAY! You SCORED: ', score)
console.log('-------------------')

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

console.log(
  'If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.'
)
console.log('Thank you for playing!')
```

---

## assignment 1 - Marvel Fandom Quiz

```javascript
var readlineSync = require('readline-sync')
var chalk = require('chalk')

const success = chalk.bold.black
const bgsuccess = chalk.bgWhite
const error = chalk.bold.red
const level = chalk.bold.cyan
const bglevel = chalk.white
const bonus = chalk.bold.yellowBright
const finalScore = chalk.bold.magenta
const bgfinalScore = chalk.bgWhite
const totalScore = chalk.bold.black
const bgtotalScore = chalk.bgYellowBright
const message = chalk.bold.black
const bgmessage = chalk.bgGreenBright

var score = 0

var highScores = [
  {
    name: 'Yash',
    score: 39,
  },
  {
    name: 'Vedant',
    score: 32,
  },
  {
    name: 'Tony Stark',
    score: 30,
  },
]

console.log(
  chalk.bgWhite.redBright.bold.italic(
    'Avengers, assemble for this ultimate quiz on the Marvel Cinematic Universe!'
  )
)
console.log('\n')

var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName)
console.log("Let's see if you can get a PERFECT SCORE!")
console.log('\n')

function displayScore() {
  console.log('Current Score: ', score)
}

function play(level, questionNo, question, answerOptions, answer) {
  // console.log("\n")
  // console.log("the correct answer is: ",answer)
  console.log('Question No.: ', questionNo)
  var userAnswer = readlineSync.keyInSelect(answerOptions, question, {
    cancel: "I don't know ¯|_(ツ)_/¯",
  })
  // console.log("User entered: ", userAnswer)

  if (userAnswer + 1 === answer) {
    console.log(bgsuccess(success('Right! Seems like you really know MCU.')))
    if (level === 1) {
      score = score + 2
    }
    if (level === 2) {
      score = score + 4
    }
    if (level === 3) {
      score = score + 3
    }
    displayScore()
    console.log('\n')
  } else {
    console.log(
      error('Oops! the correct answer is ' + answerOptions[answer - 1])
    )
    console.log(error('And you call yourself a MCU fan? lol '))
    if (level === 1) {
      score = score - 1
    }
    if (level === 2) {
      score = score - 2
    }
    displayScore()
    console.log('\n')
  }
}

var questions = [
  {
    level: 1,
    questionNo: 1,
    question: "What material makes up Captain America's shield? ",
    answerOptions: ['Uru.', 'Iron.', 'Vibranium.', 'Nitinol'],
    answer: 3,
  },
  {
    level: 1,
    questionNo: 2,
    question: 'What type of doctor is Stephen Strange?',
    answerOptions: [
      'Neurosurgeon',
      'Cardiothoracic Surgeon',
      'Trauma Surgeon',
      'Plastic Surgeon',
    ],
    answer: 1,
  },
  {
    level: 1,
    questionNo: 3,
    question: 'Which war did Captain America fight in?',
    answerOptions: [
      'World War I.',
      'World War II.',
      'Vietnam War',
      'Iraq War.',
    ],
    answer: 2,
  },
  {
    level: 1,
    questionNo: 4,
    question: "Who ISN'T on Iron Man's team in Civil War?",
    answerOptions: ['Vision.', 'Black Panther.', 'Hawkeye.', 'Black Widow.'],
    answer: 3,
  },
  {
    level: 1,
    questionNo: 5,
    question: "Who is unable to wield Thor's hammer?",
    answerOptions: ['Loki.', 'Odin.', 'Hela.', 'Vision.'],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 1,
    question:
      'What does the Winter Soldier say after Steve recognizes him for the first time? ',
    answerOptions: [
      'Who the hell is Bucky?',
      'Do I know you?',
      "He's gone?",
      'What did you say?',
    ],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 2,
    question:
      "What is Natasha's final line before she sacrifices herself on Vormir?",
    answerOptions: ['Let me go.', "It's okay.", 'Tell everyone I _', 'Clint.'],
    answer: 2,
  },
  {
    level: 2,
    questionNo: 3,
    question:
      'In the original Avengers movie, who is the villain they join together to fight?',
    answerOptions: ['Thanos.', 'Loki.', 'Red Skull', 'Ultron'],
    answer: 2,
  },
  {
    level: 2,
    questionNo: 4,
    question: 'What is Pepper Potts allergic to?',
    answerOptions: ['Strawberries.', 'Peanuts.', 'Cashews.', 'Dairy.'],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 5,
    question: 'Which of these did Stan Lee not cameo as?',
    answerOptions: [
      'A postman.',
      'An army general.',
      'A beauty pageant judge',
      'A taxi driver',
    ],
    answer: 4,
  },
  {
    level: 3,
    questionNo: 1,
    question: 'Peter Parker is in the crowd at Iron Man 2’s Stark Expo.',
    answerOptions: ['True.', 'False'],
    answer: 1,
  },
  {
    level: 3,
    questionNo: 2,
    question: 'Nick Fury and Thor wear eye patches on the same eye.',
    answerOptions: ['True.', 'False'],
    answer: 2,
  },
  {
    level: 3,
    questionNo: 3,
    question: 'Loki is Odin’s son',
    answerOptions: ['True.', 'False'],
    answer: 2,
  },
]

for (var i = 0; i < questions.length; i++) {
  if (questions[i].level === 1 && questions[i].questionNo === 1) {
    console.log(bglevel(level('We will be starting with Level 1')))
    console.log(level('Here you go...'))
    console.log('\n')
  }
  if (questions[i].level === 2 && questions[i].questionNo === 1) {
    console.log(bglevel(level('We will now be starting with Level 2')))
    console.log(level('Here you go...'))
    console.log('\n')
  }
  if (questions[i].level === 3 && questions[i].questionNo === 1) {
    console.log(bonus('BONUS ROUND!!!'))
    console.log('\n')
  }
  play(
    questions[i].level,
    questions[i].questionNo,
    questions[i].question,
    questions[i].answerOptions,
    questions[i].answer
  )
  if (questions[i].level === 1 && questions[i].questionNo === 5) {
    console.log(bglevel(level('We are now done with Level 1')))
    console.log(
      bgfinalScore(finalScore('Your score after Level 1 is: ', score))
    )
    console.log('\n')
    if (score <= 5) {
      console.log(
        "Your position isn't looking good, try to catch up some more points in the next level!"
      )
    } else {
      console.log(
        'Woah! Your position looks good! I guess you are a true MCU fan. Still, try to get some more points in your bag & beat the high scorers!'
      )
    }
  }
  if (questions[i].level === 2 && questions[i].questionNo === 5) {
    console.log(bglevel(level('We are now done with Level 2')))
    console.log(bglevel(level('Your score after Level 2 is: ', score)))
    console.log('\n')
    if (score <= 20) {
      console.log(
        'Oh my what is this score? Cap will be really disappointed in you!'
      )
      console.log('Tip: Go watch all the MCU movies again.')
      console.log('Look forward to bonus round & try to get some points')
      console.log('\n')
    } else {
      console.log(
        'You look in a good position! Cap will be really proud of you!'
      )
      console.log('Look forward to bonus round & try to beat the high scorers')
      console.log('\n')
    }
  }
  if (questions[i].level === 3 && questions[i].questionNo === 3) {
    console.log('Sadly the quiz has to come an end!')
    console.log(bgtotalScore(totalScore('Your FINAL Score: ', score)))
    console.log('\n')
  }
}

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

if (score > 30) {
  console.log(
    bgmessage(
      message.bold(
        'CONGRATS!!! You are one of the high scorers! You are a true MCU Fan! Wait for a call from Cap.'
      )
    )
  )
}
console.log('-------------------')

console.log(
  bgmessage(
    message(
      'If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.'
    )
  )
)
console.log('\n')
console.log('Thank you for playing!')
```
