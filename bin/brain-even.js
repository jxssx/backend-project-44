#!/usr/bin/env node

import readLineSync from 'readline-sync';
import { greeting, user } from '../src/cli.js';

greeting();

const isEven = (num) => {
  let result;
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

let answer;
let expectedResult;

const evenGame = () => {
  const number = Math.floor(Math.random() * 100);
  expectedResult = isEven(number);
  console.log(`Question: ${number}`);
  answer = readLineSync.question('Your answer: ');
  if (answer === expectedResult) {
    return true;
  }
  return false;
};

let lost;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  if (evenGame()) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResult}'. \nLet's try again, ${user.name}!`);
    lost = true;
    break;
  }
}

if (!lost) {
  console.log(`Congratulations, ${user.name}!`);
}
