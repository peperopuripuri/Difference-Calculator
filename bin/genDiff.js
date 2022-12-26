#!/usr/bin/env node
import { program } from 'commander';

program
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option( '-f, --format', '<type>  output format')
    .arguments('<filepath1> <filepath2>')
program.parse();
console.log(program);