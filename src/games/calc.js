import { generateRandomNumber1to100 } from '../helpers.js';
import game from '../index.js';

const desc = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operatorIndex) => {
  if (operatorIndex === 0) {
    return firstNumber + secondNumber;
  } if (operatorIndex === 1) {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

const generateQuestion = () => {
  const firstNumber = generateRandomNumber1to100();
  const secondNumber = generateRandomNumber1to100();
  const operators = ['+', '-', '*'];
  const operatorIndex = (Math.floor(Math.random() * 2.99)); // 0 = "+", 1 = "-", 2 = "*"
  return [`${firstNumber} ${operators[operatorIndex]} ${secondNumber}`, `${calculate(firstNumber, secondNumber, operatorIndex)}`];
};

export default () => game(desc, generateQuestion);
