import { generateRandomNumber1to100 } from '../helpers.js';
import game from '../index.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateQuestion = () => {
  const question = generateRandomNumber1to100();
  return [question, `${isEven(question) ? 'yes' : 'no'}`];
};

export default () => game(desc, generateQuestion);
