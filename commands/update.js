import { readFile, writeFile } from "../utils/file.js";
import chalk from "chalk";


export const update = async (id, updatedTask) => {

      const data = await readFile();

      data.splice(id-1, 1, {id: id, title: updatedTask});

      await writeFile(data);

      const updatedData = await readFile();

      // console.log(updatedData);
      // console.log(data);
      
      if(data[id -1].title == updatedData[id- 1].title) {
            console.log(chalk.greenBright.bold(`Task updated`));
            console.log(`${chalk.rgb(71, 114, 244).bold(`Updated task: `)}${updatedData[id -1].title}`);
      } else {
            console.log(chalk.redBright.bold(`Task upddation failed`));
      }
}

update(3, 'Sleep');