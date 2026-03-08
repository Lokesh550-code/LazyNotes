#!/usr/bin/env node

import { help } from "../commands/help.js";
import { add } from "../commands/add.js";
import { deletetask } from "../commands/delete.js";
import { list } from "../commands/list.js";
import { update } from "../commands/update.js";
import chalk from "chalk";

const command = process.argv[2];
if (command !== "") {
    command = command.trim();
}
let text = process.argv.slice(3).join(` `);
    text = text.trim();


if(!command) {
    help();
} else if (command === 'add') {
    add(text)
} else if (command === 'list' || command === 'ls') {
    list();
} else if (command === 'delete') {
    const arg = Number(process.argv[3]);
    deletetask(arg);
}else if (command === 'update') {
    const arg = Number(process.argv[3]);
    update(arg);
} else if (command === 'help') {
    help();
} else {
    console.log(chalk.bold.red(`Unknown command.`));
    help();
}