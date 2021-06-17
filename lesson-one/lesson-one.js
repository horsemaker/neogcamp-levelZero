// ex01 - start
console.log('Yash Ghodekar')
// ex01 - end

// ex02 - start
prompt('Give me your name: ') // On Browser

var readlineSync = require('readline-sync')
var userName = readlineSync.question('May I have your name?')
console.log(userName)
// ex02 - end

// ex03 - start
var welcomeMessage = 'Welcome' + userName // string concatenation
console.log(welcomeMessage)
// ex03 - end

// ex04 - start
var readlineSync = require('readline-sync')
var userName = readlineSync.question('May I have your name?')
var welcomeMessage = 'Welcome' + userName // string concatenation
console.log(welcomeMessage)
// ex04 - end

// ex05 - start
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
// ex05 -end

// ex06 - start
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
// ex06 - end

// ex07 - start
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
// ex07 - end

// ex08 - start
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
// ex08 - end

// improved ex06 - start
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
// improved ex06 - end

// ex09 - start
for (var i = 0; i < 5; i = i + 1) {
  console.log('Yash Ghodekar')
}

for (var i = 0; i <= 10; i = i + 1) {
  console.log(22 + i)
}
// ex09 - end

// homework - start
var readlineSync = require('readline-sync')
var number = readlineSync.question('Enter Number: ')

for (var i = 1; i <= number; i++) {
  var str = ''
  for (var j = 1; j <= i; j++) {
    str = str + '*'
  }
  console.log(str)
}
// homework - end

// bonus - start
var readlineSync = require('readline-sync')
var number = readlineSync.question('Enter Number: ')

for (var i = number; i >= 1; i--) {
  var str = ''
  for (var j = 1; j <= i; j++) {
    str = str + '*'
  }
  console.log(str)
}
// bonus - end

// ex10 - start
var groceryList = ['milk', 'eggs', 'butter', 'bread', 'jam']

console.log(groceryList[0])
console.log(groceryList[2])
console.log(groceryList[4])

// how to print last item of the array
var howLongIsThisArray = groceryList.length
console.log(howLongIsThisArray)
console.log(groceryList[groceryList.length - 1])
// ex10 - end

// ex11 - start
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
// ex11 - end

// ex12 - start

// ex12 - end

// ex13 - start
// ex13 - end

// ex14 - start
// ex14 - end

// ex15 - start
// ex15 - end
