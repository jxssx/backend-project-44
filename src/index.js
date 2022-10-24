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
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
