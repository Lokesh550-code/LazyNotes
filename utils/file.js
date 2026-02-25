import fs from 'node:fs/promises';

const path = './data/tasks.json';


export const readfile  =  async () => {
      try {
            const data = await fs.readFile(`${path}`, 'utf-8');
            return JSON.parse(data);
      } catch (err){

            if(err.code === 'ENOENT'){
                  return [];
            }
            console.error(err);
            return [];
      }
}

export const writeFile = async (data) => {
      try {
            const obj = JSON.stringify(data, null, 2);
            await fs.writeFile(path, obj, 'utf-8',);
      } catch (err) {
            console.log("Error: ",err);
      }
}