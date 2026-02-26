import { readFile, writeFile } from "../utils/file.js";


const add = async (id, title) => {

      const data =  await readFile();

      let arr = [...data];

      arr.push({id: id, title: title});
      await writeFile(arr);
      
      console.log(arr[0], `array`)
      const checkItemAdded = await readFile();
      console.log(checkItemAdded[0], `json`)

      if(arr[id-1].id == checkItemAdded[id-1].id) {
            console.log(`Task added: ${checkItemAdded[id -1].title}`);
      }
      else {
            console.log(`Task failed!`);
      }
}

add(1, 'Helloworld');