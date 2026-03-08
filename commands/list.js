import { readFile} from "../utils/file.js";
import chalk from 'chalk';

export const list = async () => {
      const tasks = await readFile();

      if(tasks.length === 0){
            console.log(chalk.redBright(`There is no task. Please add one.`));
      }else{
            console.log(chalk.blueBright.bold(`LazyNotes`));
            console.log(chalk.blueBright(`---------`));
            tasks.forEach((task, id) => {
                  console.log(`${chalk.blueBright.bold(`${id + 1}.`)} ${task.title}`);
            });
      }
}

list()