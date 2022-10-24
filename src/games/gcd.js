import generateRandomNumber from '../helpers.js';
import game from '../index.js';

const desc = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  const remainder = firstNumber % secondNumber;
  return findGcd(secondNumber, remainder);
};

/* const findGcd = (num1, num2) => (!num2 ? num1 : findGcd(num2, num1 % num2);
- такой же однострочник. не знаю, стоит ли использовать. мне показалось, что он слабо читается */

const generateQuestion = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  return [`${firstNumber} ${secondNumber}`, `${findGcd(firstNumber, secondNumber)}`];
};

export default () => game(desc, generateQuestion);
