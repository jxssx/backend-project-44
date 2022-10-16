#!/usr/bin/env node

import game from '../src/index.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  let result;
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

let question;

const generateQuestion = () => {
  question = Math.floor(Math.random() * 100);
  return question;
};

const findCorrectAnswer = () => isEven(question);

game(desc, generateQuestion, findCorrectAnswer);
