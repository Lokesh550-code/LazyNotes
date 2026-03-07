import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const dirPath = path.join(os.homedir(), ".lazynotes");
const filePath = path.join(dirPath, "tasks.json");

// ensure directory exists
await fs.mkdir(dirPath, { recursive: true });

// ensure file exists
try {
  await fs.access(filePath);
} catch {
  await fs.writeFile(filePath, "[]");
}

export const readFile  =  async () => {
      try {
            const data = await fs.readFile(`${filePath}`, 'utf-8');
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
            await fs.writeFile(filePath, obj, 'utf-8',);
      } catch (err) {
            console.log("Error: ",err);
      }
}