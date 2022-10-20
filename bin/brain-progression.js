#!/usr/bin/env node

import game from '../src/index.js';
import { desc, generateQuestion, findCorrectAnswer } from '../src/games/progression.js';

game(desc, generateQuestion, findCorrectAnswer);
