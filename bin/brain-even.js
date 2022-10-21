#!/usr/bin/env node

import game from '../src/index.js';
import { desc, generateQuestion } from '../src/games/even.js';

game(desc, generateQuestion);
