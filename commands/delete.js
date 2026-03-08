import { readFile, writeFile } from "../utils/file.js";
import chalk from "chalk";


export const deletetask = async(id) => {
      const data = await readFile();

      if(data.length - 1 < id - 1) {
            console.log(chalk.bold.redBright(`Please enter a valid Task Id.`));
            return;
      }

      // console.log(data);   //to check if function is reading the file or not

      let removedTask = data.splice(id-1, 1);
      // console.log(removedTask);  //the removed task was not working 

      let taskindex = 1;
      data.forEach(task => {
            task.id = taskindex;
            taskindex++;
      });



      await writeFile(data);
      const checkItemremoved = await readFile();
      // console.log(checkItemremoved);

      if(checkItemremoved.length === data.length) {
            console.log(chalk.greenBright.bold(`Task deleted!`));
            console.log(`${chalk.blueBright.bold(`Deleted task:`)} ${removedTask[0].title}`);
      } else {
            console.log(chalk.redBright.bold('Deletion failed'));
      }
}