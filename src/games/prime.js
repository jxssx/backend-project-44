import { generateRandomNumber1to100 } from '../helpers.js';
import game from '../index.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question <= 3) {
    return true;
  }
  if (question % 2 === 0) {
    return false;
  }
  for (let i = 3; i < question ** 0.5 + 1; i += 2) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const question = generateRandomNumber1to100();
  return [question, `${isPrime(question) ? 'yes' : 'no'}`];
};

export default () => game(desc, generateQuestion);
