import { generateRandomNumber1to100 } from '../helpers.js';
import game from '../index.js';

const desc = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  const leastNumber = Math.min(firstNumber, secondNumber);
  for (let i = 1; i <= leastNumber; i += 1) {
    const currentDevisor = leastNumber / i;
    if (firstNumber % currentDevisor === 0 && secondNumber % currentDevisor === 0) {
      return currentDevisor;
    }
  }
  return 1;
};

const generateQuestion = () => {
  const firstNumber = generateRandomNumber1to100();
  const secondNumber = generateRandomNumber1to100();
  return [`${firstNumber} ${secondNumber}`, `${findGcd(firstNumber, secondNumber)}`];
};

export default () => game(desc, generateQuestion);
