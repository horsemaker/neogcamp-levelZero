var readlineSync = require("readline-sync");
var chalk = require("chalk");

const success = chalk.bold.black;
const bgsuccess = chalk.bgWhite;
const error = chalk.bold.red;
const level = chalk.bold.cyan;
const bglevel = chalk.white;
const bonus = chalk.bold.yellowBright;
const finalScore = chalk.bold.magenta;
const bgfinalScore = chalk.bgWhite;
const totalScore = chalk.bold.black;
const bgtotalScore = chalk.bgYellowBright;
const message = chalk.bold.black;
const bgmessage = chalk.bgGreenBright;

var score = 0;

var highScores = [
   {
    name: "Yash",
    score: 39,
  },
  {
    name: "Vedant",
    score: 32,
  },
  {
    name: "Tony Stark",
    score: 30,
  },
]

console.log(chalk.bgWhite.redBright.bold.italic("Avengers, assemble for this ultimate quiz on the Marvel Cinematic Universe!"))
console.log("\n");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName);
console.log("Let's see if you can get a PERFECT SCORE!");
console.log("\n");

function displayScore() {
  console.log("Current Score: ", score);
}

function play(level, questionNo, question, answerOptions, answer) {
  // console.log("\n")
  // console.log("the correct answer is: ",answer)
  console.log("Question No.: ", questionNo);
  var userAnswer = readlineSync.keyInSelect(answerOptions, question, { cancel: "I don't know ¯|_(ツ)_/¯" });
  // console.log("User entered: ", userAnswer)

  if (userAnswer + 1 === answer) {
    console.log(bgsuccess(success("Right! Seems like you really know MCU.")));
    if (level === 1) {
      score = score + 2;
    }
    if (level === 2) {
      score = score + 4;
    }
    if (level === 3) {
      score = score + 3;
    }
    displayScore();
    console.log("\n");
  } else {
    console.log(error("Oops! the correct answer is " + answerOptions[answer - 1]));
    console.log(error("And you call yourself a MCU fan? lol "));
    if (level === 1) {
      score = score - 1;
    }
    if (level === 2) {
      score = score - 2;
    }
    displayScore();
    console.log("\n");
  }
}

var questions = [
  {
    level: 1,
    questionNo: 1,
    question: "What material makes up Captain America's shield? ",
    answerOptions: ["Uru.",
      "Iron.",
      "Vibranium.",
      "Nitinol"],
    answer: 3,
  },
  {
    level: 1,
    questionNo: 2,
    question: "What type of doctor is Stephen Strange?",
    answerOptions: ["Neurosurgeon",
      "Cardiothoracic Surgeon",
      "Trauma Surgeon",
      "Plastic Surgeon"],
    answer: 1,
  },
  {
    level: 1,
    questionNo: 3,
    question: "Which war did Captain America fight in?",
    answerOptions: ["World War I.",
      "World War II.",
      "Vietnam War",
      "Iraq War."],
    answer: 2,
  },
  {
    level: 1,
    questionNo: 4,
    question: "Who ISN'T on Iron Man's team in Civil War?",
    answerOptions: ["Vision.",
      "Black Panther.",
      "Hawkeye.",
      "Black Widow."],
    answer: 3,
  },
  {
    level: 1,
    questionNo: 5,
    question: "Who is unable to wield Thor's hammer?",
    answerOptions: ["Loki.",
      "Odin.",
      "Hela.",
      "Vision."],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 1,
    question: "What does the Winter Soldier say after Steve recognizes him for the first time? ",
    answerOptions: ["Who the hell is Bucky?",
      "Do I know you?",
      "He's gone?",
      "What did you say?"],
    answer: 1,
  },
  {
    level: 2,
    questionNo: 2,
    question: "What is Natasha's final line before she sacrifices herself on Vormir?",
    answerOptions: ["Let me go.",
      "It's okay.",
      "Tell everyone I _",
      "Clint."],
    answer: 2,
  },
  {
  level: 2,
  questionNo: 3,
  question: "In the original Avengers movie, who is the villain they join together to fight?",
  answerOptions: ["Thanos.",
    "Loki.",
    "Red Skull",
    "Ultron"],
  answer: 2,
  },
  {
  level: 2,
  questionNo: 4,
  question: "What is Pepper Potts allergic to?",
  answerOptions: ["Strawberries.",
    "Peanuts.",
    "Cashews.",
    "Dairy."],
  answer: 1,
  },
  {
  level: 2,
  questionNo: 5,
  question: "Which of these did Stan Lee not cameo as?",
  answerOptions: ["A postman.",
    "An army general.",
    "A beauty pageant judge",
    "A taxi driver"],
  answer: 4,
  },
  {
    level: 3,
    questionNo: 1,
    question: "Peter Parker is in the crowd at Iron Man 2’s Stark Expo.",
    answerOptions: ["True.",
                    "False"],
    answer: 1,
  },
  {
    level: 3,
    questionNo: 2,
    question: "Nick Fury and Thor wear eye patches on the same eye.",
    answerOptions: ["True.",
                    "False"],
    answer: 2,
  },
  {
    level: 3,
    questionNo: 3,
    question: "Loki is Odin’s son",
    answerOptions: ["True.",
                    "False"],
    answer: 2,
  }
]

for (var i = 0; i < questions.length; i++) {
  if (questions[i].level === 1 && questions[i].questionNo === 1) {
    console.log(bglevel(level("We will be starting with Level 1")));
    console.log(level("Here you go..."));
    console.log("\n");
  }
  if (questions[i].level === 2 && questions[i].questionNo === 1) {
    console.log(bglevel(level("We will now be starting with Level 2")));
    console.log(level("Here you go..."));
    console.log("\n");
  }
  if (questions[i].level === 3 && questions[i].questionNo === 1) {
    console.log(bonus("BONUS ROUND!!!"));
    console.log("\n");
  }
  play(questions[i].level,questions[i].questionNo, questions[i].question, questions[i].answerOptions, questions[i].answer);
  if (questions[i].level === 1 && questions[i].questionNo === 5) {
    console.log(bglevel(level("We are now done with Level 1")));
    console.log(bgfinalScore(finalScore("Your score after Level 1 is: ", score)));
    console.log("\n");
    if (score <= 5) {
      console.log("Your position isn't looking good, try to catch up some more points in the next level!")
    } else {
      console.log("Woah! Your position looks good! I guess you are a true MCU fan. Still, try to get some more points in your bag & beat the high scorers!")
    }
  }
  if (questions[i].level === 2 && questions[i].questionNo === 5) {
    console.log(bglevel(level("We are now done with Level 2")));
    console.log(bglevel(level("Your score after Level 2 is: ", score)));
    console.log("\n");
    if (score <= 20) {
      console.log("Oh my what is this score? Cap will be really disappointed in you!")
      console.log("Tip: Go watch all the MCU movies again.");
      console.log("Look forward to bonus round & try to get some points");
      console.log("\n")
    } else {
      console.log("You look in a good position! Cap will be really proud of you!")
      console.log("Look forward to bonus round & try to beat the high scorers")
      console.log("\n")
    }
  }
  if (questions[i].level === 3 && questions[i].questionNo === 3) {
    console.log("Sadly the quiz has to come an end!");
    console.log(bgtotalScore(totalScore("Your FINAL Score: ", score)));
    console.log("\n");
  }
}

console.log("Check out the high scorers - ");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ": " + highScores[i].score);
}
console.log("-------------------")

if (score > 30) {
  console.log(bgmessage(message.bold("CONGRATS!!! You are one of the high scorers! You are a true MCU Fan! Wait for a call from Cap.")))
}
console.log("-------------------")

console.log(bgmessage(message("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.")))
console.log("\n");
console.log("Thank you for playing!")