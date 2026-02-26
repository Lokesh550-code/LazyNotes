import { readFile} from "../utils/file.js";

export const list = async () => {
      const tasks = await readFile();

      if(tasks.length === 0){
            console.log(`There is no task. Please add one.`)
      }else{
            tasks.forEach((task, id) => {
                  console.log(`ID: ${id} Task: ${task.title}`);
            });
      }
}