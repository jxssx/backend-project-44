#!/usr/bin/env node

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

const generateQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  return [question, isEven(question)];
};

export { desc, generateQuestion };
