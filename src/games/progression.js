import generateRandomNumber from '../helpers.js';
import game from '../index.js';

const desc = 'What number is missing in the progression?';

const generateProgression = (unknownPosition, startingPoint, difference) => {
  const progression = [];
  for (let i = 0; i < 11; i += 1) {
    progression.push(`${startingPoint + difference * i}`);
  }
  progression[unknownPosition] = '..';
  return progression.join(' ');
};

const generateQuestion = () => {
  const unknownPosition = generateRandomNumber(1, 10);
  const startingPoint = generateRandomNumber(1, 100);
  const difference = generateRandomNumber(1, 10);
  const answer = startingPoint + unknownPosition * difference;
  return [generateProgression(unknownPosition, startingPoint, difference), `${answer}`];
};

export default () => game(desc, generateQuestion);
