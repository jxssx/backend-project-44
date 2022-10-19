#!/usr/bin/env node

import { greeting, user } from '../src/cli.js';

greeting();
console.log(`Hello, ${user.name}!`);
