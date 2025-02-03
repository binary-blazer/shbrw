import path from "node:path";
import fs from "node:fs/promises";
import promptSync from "prompt-sync";

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)).substring(1));
const prompt = promptSync();

const packageJsonPath = path.join(__dirname, '..', 'package.json');

async function updateVersion() {
  try {
    const data = await fs.readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(data);

    const newVersion = prompt('Enter the new version: ');
    if (newVersion) {
      packageJson.version = newVersion;
      await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
      console.log(`Version updated to ${newVersion}`);
    } else {
      console.log('No version entered. Version not updated.');
    }
  } catch (error) {
    console.error('Error reading or updating package.json:', error);
  }
}

updateVersion();