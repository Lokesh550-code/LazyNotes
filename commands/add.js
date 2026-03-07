import { readFile, writeFile } from "../utils/file.js";
import { index } from "../utils/index.js";
import chalk from "chalk";


export const add = async (title) => {

      const data =  await readFile();

      const arr = [...data];

      arr.push({id: await index(), title: title});
      await writeFile(arr);
      
      // console.log(arr[0], `array`) // if statement was not running so console.logged to see where the code was broken
      const checkItemAdded = await readFile();
      // console.log(checkItemAdded[0], `json`) // same applies here aswell as teh first console.log

      if(arr[arr.length-1].id === checkItemAdded[checkItemAdded.length-1].id) {
            console.log(`${chalk.greenBright.bold(`Task added:`)} ${checkItemAdded[arr.length -1].title}`);
      }
      else {
            console.log(chalk.redBright.bold(`Task failed!`));
      }
}