#!/usr/bin/env node

import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readLineSync.question('May i have your name? ');
console.log(`Hello, ${username}!`);
