#!/usr/bin/env node

const desc = 'What number is missing in the progression?';

let expectedAnswer;

const generateQuestion = () => {
  let question = '';
  const unknownPosition = Math.floor(Math.random() * 9) + 1;
  const startingPoint = Math.floor(Math.random() * 20);
  const difference = Math.floor(Math.random() * 9) + 1;
  let newStartingPoint;
  for (let i = 0; i < unknownPosition; i += 1) {
    question += `${startingPoint + difference * i} `;
    newStartingPoint = startingPoint + difference * (i + 2);
  }
  expectedAnswer = newStartingPoint - difference;
  question += '.. ';
  for (let i = 0; i < 10 - unknownPosition; i += 1) {
    question += `${newStartingPoint + difference * i} `;
  }
  return question.trim();
};

const findCorrectAnswer = () => expectedAnswer;

export { desc, generateQuestion, findCorrectAnswer };