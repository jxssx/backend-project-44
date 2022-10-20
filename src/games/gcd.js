#!/usr/bin/env node

const desc = 'Find the greatest common divisor of given numbers.';

let firstNumber;
let secondNumber;

const generateQuestion = () => {
  firstNumber = Math.floor(Math.random() * 100);
  secondNumber = Math.floor(Math.random() * 100);
  return `${firstNumber} ${secondNumber}`;
};

const findCorrectAnswer = () => {
  const leastNumber = Math.min(firstNumber, secondNumber);
  for (let i = 1; i <= leastNumber; i += 1) {
    const currentDevisor = leastNumber / i;
    if (firstNumber % currentDevisor === 0 && secondNumber % currentDevisor === 0) {
      return currentDevisor;
    }
  }
  return 1;
};

export { desc, generateQuestion, findCorrectAnswer };
