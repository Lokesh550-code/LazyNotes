import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const dirPath = path.join(os.homedir(), ".lazynotes");
const filePath = path.join(dirPath, "tasks.json");

export async function ensureStorage() {
  await fs.mkdir(dirPath, { recursive: true });

  try {
    const data = await fs.readFile(filePath, "utf8");

    if (!data.trim()) {
      await fs.writeFile(filePath, "[]");
    }
  } catch {
    await fs.writeFile(filePath, "[]");
  }
}

export async function readFile() {
  await ensureStorage();

  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

export async function writeFile(data) {
  await ensureStorage();

  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}