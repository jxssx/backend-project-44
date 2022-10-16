#!/usr/bin/env node

import game from '../src/index.js';

let expectedAnswer;

const generateQuestion = () => {
  const numbers = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
  const operatorIndex = (Math.floor(Math.random() * 2.99)); // 0 = "+", 1 = "-", 2 = "*"
  if (operatorIndex === 0) {
    expectedAnswer = numbers[0] + numbers[1];
    return `${numbers[0]} + ${numbers[1]}`;
  } if (operatorIndex === 1) {
    expectedAnswer = numbers[0] - numbers[1];
    return `${numbers[0]} - ${numbers[1]}`;
  }
  expectedAnswer = numbers[0] * numbers[1];
  return `${numbers[0]} * ${numbers[1]}`;
};

const findCorrectAnswer = () => expectedAnswer;

const desc = 'What is the result of the expression?';

game(desc, generateQuestion, findCorrectAnswer);

/*
let answer;

const calcGame = () => {
  console.log('Question:', generateQuestion());
  answer = readLineSync.question('Your answer: ');
  if (answer === expectedAnswer.toString()) {
    return true;
  }
  return false;
};

let lost;

console.log('What is the result of the expression?');
for (let i = 0; i < 3; i += 1) {
  if (calcGame()) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
    \nLet's try again, ${user.name}!`);
    lost = true;
    break;
  }
}

if (!lost) {
  console.log(`Congratulations, ${user.name}!`);
} */