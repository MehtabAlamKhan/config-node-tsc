import fs from "node:fs";
import readLine from "node:readline";
import { execSync } from "node:child_process";
import { LOG, ERROR, DEFAULT, BLUE } from "./constants";

export default async function tscInit() {
  LOG(`Initializing ${BLUE}tsconfig.json ${DEFAULT}file ...`);

  try {
    const result = execSync(
      `npx tsc --init --outDir "./dist" --module "NodeNext" --moduleResolution "NodeNext" --target "ES2020"`,
      { encoding: "utf-8" }
    );
    removeComments().then(() => {
      return Promise.resolve();
    });
  } catch (error) {
    ERROR(error);
    process.exit(1);
  }
}

async function removeComments() {
  LOG(`Removing comments from ${BLUE}tsconfig.json ${DEFAULT}file ...`);

  const tsConfigFile = await fs.createReadStream("./tsconfig.json", {
    encoding: "utf-8",
  });

  const readLines = readLine.createInterface({
    input: tsConfigFile,
    crlfDelay: Infinity,
  });

  let arrOfLines: string[] = [];

  readLines.on("line", (line) => {
    const lengthOfLine = line.length;
    let editedLine = "";
    for (let i = 0; i < lengthOfLine; i++) {
      if (
        line[i] === "/" &&
        i + 1 < lengthOfLine &&
        (line[i + 1] === "/" || line[i + 1] === "*")
      ) {
        editedLine += "";
        break;
      }
      editedLine += line[i];
    }
    editedLine = editedLine.trimEnd();
    if (editedLine.length) arrOfLines.push(editedLine);
  });

  readLines.on("close", () => {
    const writeStream = fs.createWriteStream("./tsconfig.json", {
      encoding: "utf-8",
    });

    for (var str of arrOfLines) {
      writeStream.write(str + "\r\n");
    }
  });
  LOG(`>  Removed comments from ${BLUE}tsconfig.json ${DEFAULT}file.`);
}
