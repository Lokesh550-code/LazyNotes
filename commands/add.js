import { readFile, writeFile } from "../utils/file.js";


const add = async (id, title) => {

      const data =  await readFile();

      let arr = [...data];

      arr.push({id: id, title: title});
      await writeFile(arr);
      
      const checkItemAdded = await readFile();

      console.log(`Task Added: ${checkItemAdded[id-1].title}`);
}

add(3, 'Helloworld');