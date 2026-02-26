import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url); // node js removed the global variable __dirName, so manually created the variable
const dirName = path.dirname(fileName);

const absolpath = path.join(dirName, '../data/tasks.json');
// console.log(absolpath) // the read func was not printing the log in try block so wrote it to check if file path is correct or not.


export const readFile  =  async () => {
      try {
            const data = await fs.readFile(`${absolpath}`, 'utf-8');
            // console.log("Reading from: ", absolpath); // was having error as to why read func is giving an empty array
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
            await fs.writeFile(absolpath, obj, 'utf-8',);
      } catch (err) {
            console.log("Error: ",err);
      }
}