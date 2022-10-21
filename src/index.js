import readLineSync from 'readline-sync';

const game = (desc, generateQuestion) => {
  const roundsAmount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(desc);
  for (let i = 0; i < roundsAmount; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log('Question:', question);
    const answer = readLineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`); // если тут не будет return, линтер выдает ошибку 'Expected to return a value at the end of arrow function'
};

export default game;
