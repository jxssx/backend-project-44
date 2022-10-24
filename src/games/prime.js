import generateRandomNumber from '../helpers.js';
import game from '../index.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number ** 0.5 + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const question = generateRandomNumber(1, 100);
  return [question, `${isPrime(question) ? 'yes' : 'no'}`];
};

export default () => game(desc, generateQuestion);
