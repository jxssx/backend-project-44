#!/usr/bin/env node

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question <= 3) {
    return 'yes';
  }
  if (question % 2 === 0) {
    return 'no';
  }
  for (let i = 3; i < question ** 0.5 + 1; i += 2) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateQuestion = () => {
  const used = [];
  for (let i = 0; i < 10; i += 1) {
    const question = Math.floor((Math.random() * 19) + 1);
    if (!used.includes(question)) {
      used.push(question);
      return [question, `${isPrime(question)}`];
    }
  }
  const question = Math.floor((Math.random() * 19) + 1);
  return [question, isPrime(question)];
};

export { desc, generateQuestion };
