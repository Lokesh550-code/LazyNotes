import { readFile, writeFile } from "../utils/file.js";
import chalk from "chalk";


export const update = async (id, updatedTask) => {

      const data = await readFile();

      if(data.length - 1 < id || typeof id !== 'number') {
            console.log(chalk.bold.redBright(`Please enter a valid Task Id.`));
            return;
      }

      if(updatedTask === "") {
            console.log(chalk.bold.redBright(`Error: New task text required.`))
      }

      data.splice(id-1, 1, {id: id, title: updatedTask});

      await writeFile(data);

      const updatedData = await readFile();

      // console.log(updatedData);
      // console.log(data);
      
      if(data[id -1].title == updatedData[id- 1].title) {
            console.log(chalk.greenBright.bold(`Task updated.`));
            console.log(`${chalk.blueBright.bold(`Updated task: `)}${updatedData[id -1].title}`);
      } else if (data[id -1].title != updatedData[id - 1].title) {
            console.log(chalk.redBright.bold(`Task upddation failed.`));
      }
}