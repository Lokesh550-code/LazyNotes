import { readFile } from "./file.js";

export const index = async() => {
    let data = await readFile();

    let index  = data.length;
    return index;
}