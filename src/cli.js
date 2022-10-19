import readLineSync from 'readline-sync';

const user = {
  name: '',
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  user.name = readLineSync.question('May i have your name? ');
};

export { greeting, user };
