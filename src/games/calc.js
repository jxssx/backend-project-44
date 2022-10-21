#!/usr/bin/env node

const desc = 'What is the result of the expression?';

const generateQuestion = () => {
  const numbers = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
  const operatorIndex = (Math.floor(Math.random() * 2.99)); // 0 = "+", 1 = "-", 2 = "*"
  let expectedAnswer;
  if (operatorIndex === 0) {
    expectedAnswer = numbers[0] + numbers[1];
    return [`${numbers[0]} + ${numbers[1]}`, `${expectedAnswer}`];
  } if (operatorIndex === 1) {
    expectedAnswer = numbers[0] - numbers[1];
    return [`${numbers[0]} - ${numbers[1]}`, `${expectedAnswer}`];
  }
  expectedAnswer = numbers[0] * numbers[1];
  return [`${numbers[0]} * ${numbers[1]}`, `${expectedAnswer}`];
};

export { desc, generateQuestion };
