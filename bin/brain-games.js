#!/usr/bin/env node

import { greeting, user } from '../src/cli.js';

greeting();
// eslint-disable-next-line prefer-template
console.log('Hello, ' + user.name);
