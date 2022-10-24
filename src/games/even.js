import generateRandomNumber from '../helpers.js';
import game from '../index.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateQuestion = () => {
  const question = generateRandomNumber(1, 100);
  return [question, `${isEven(question) ? 'yes' : 'no'}`];
};

export default () => game(desc, generateQuestion);
