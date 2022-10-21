#!/usr/bin/env node

const desc = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const leastNumber = Math.min(firstNumber, secondNumber);
  for (let i = 1; i <= leastNumber; i += 1) {
    const currentDevisor = leastNumber / i;
    if (firstNumber % currentDevisor === 0 && secondNumber % currentDevisor === 0) {
      return [`${firstNumber} ${secondNumber}`, `${currentDevisor}`];
    }
  }
  return [`${firstNumber} ${secondNumber}`, '1'];
};

export { desc, generateQuestion };
