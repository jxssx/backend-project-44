#!/usr/bin/env node

import game from '../src/index.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let question;
const reserved = [];

const generateQuestion = () => {
  for (let i = 0; i < 10; i += 1) {
    question = Math.floor((Math.random() * 19) + 1);
    if (!reserved.includes(question)) {
      reserved.push(question);
      return question;
    }
  }
  question = Math.floor((Math.random() * 19) + 1);
  return question;
};

const findCorrectAnswer = () => {
  if (question <= 3) {
    return 'yes';
  }
  if (question % 2 === 0) {
    return 'no';
  }
  for (let i = 3; i < question ** 0.5 + 1; i += 2) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

game(desc, generateQuestion, findCorrectAnswer);
