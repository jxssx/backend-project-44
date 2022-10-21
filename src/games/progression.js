import { generateRandomNumber1to100, generateRandomNumber1to10 } from '../helpers.js';
import game from '../index.js';

const desc = 'What number is missing in the progression?';

const generateProgression = (unknownPosition, startingPoint, difference) => {
  let progression = '';
  let newStartingPoint;
  for (let i = 0; i < unknownPosition; i += 1) {
    progression += `${startingPoint + difference * i} `;
    newStartingPoint = startingPoint + difference * (i + 2);
  }
  const answer = newStartingPoint - difference;
  progression += '.. ';
  for (let i = 0; i < 10 - unknownPosition; i += 1) {
    progression += `${newStartingPoint + difference * i} `;
  }
  return [progression.trim(), `${answer}`];
};

const generateQuestion = () => {
  const unknownPosition = generateRandomNumber1to10();
  const startingPoint = generateRandomNumber1to100();
  const difference = generateRandomNumber1to10();
  return generateProgression(unknownPosition, startingPoint, difference);
};

export default () => game(desc, generateQuestion);
