import chalk from "chalk"

export const help = () => {
    console.log(chalk.bold.blueBright(`LazyNotes - CLI task manager`));
    console.log(` `);
    console.log(chalk.bold.yellow(`Usage: `));
    console.log(chalk.gray.bold(`  lazynotes <command> [arguments]`));
    console.log(` `);
    console.log(chalk.bold.yellow(`Commands:`))
    console.log(chalk.bold.gray(`  add <task>      Add a new task`));
    console.log(chalk.bold.gray(`  list            how all tasks`));
    console.log(chalk.bold.gray(`  delete <id>     Delete a task`));
    console.log(chalk.bold.gray(`  update <id>     Update an existing task`));
    console.log(chalk.bold.gray(`  help            Show help menu`));
    
}