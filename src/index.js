import readLineSync from 'readline-sync';
import { greeting, user } from './cli.js';

let lost;

const game = (desc, generateQuestion, expectedAnswer) => {
  greeting();
  console.log(desc);
  for (let i = 0; i < 3; i += 1) {
    console.log('Question:', generateQuestion());
    const answer = readLineSync.question('Your answer: ');
    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      lost = true;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${user.name}!`);
      break;
    }
  }
};

if (!lost) {
  console.log(`Congratulations, ${user.name}!`);
}

export default game;
