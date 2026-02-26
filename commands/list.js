import { readFile} from "../utils/file.js";
import chalk from 'chalk';

export const list = async () => {
      const tasks = await readFile();

      if(tasks.length === 0){
            console.log(chalk.redBright(`There is no task. Please add one.`));
      }else{
            tasks.forEach((task, id) => {
                  console.log(`${chalk.rgb(71, 114, 244).bold(`ID:`)} ${id + 1} ${chalk.rgb(71, 114, 244).bold(`Task:`)} ${task.title}`);
            });
      }
}