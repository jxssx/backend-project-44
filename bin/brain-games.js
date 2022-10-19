#!/usr/bin/env node

import readLineSync from 'readline-sync';

const username = readLineSync.question('May i have your name? ');
console.log(`Hello, ${username}!`);
