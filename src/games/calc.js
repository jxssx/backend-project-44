import generateRandomNumber from '../helpers.js';
import game from '../index.js';

const desc = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const generateQuestion = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(0, operators.length - 0.1)];
  return [`${firstNumber} ${operator} ${secondNumber}`, `${calculate(firstNumber, secondNumber, operator)}`];
};

export default () => game(desc, generateQuestion);
