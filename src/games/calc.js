#!/usr/bin/env node

const desc = 'What is the result of the expression?';

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

export { desc, generateQuestion, findCorrectAnswer };
