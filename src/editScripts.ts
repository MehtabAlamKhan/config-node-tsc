import fs from "node:fs";
import { LOG, ERROR, GREEN, DEFAULT } from "./constants";

export default function editScripts(): void {
  try {
    LOG(`Adding scripts to ${GREEN}package.json ${DEFAULT}file ...`);
    var pkg = JSON.parse(
      fs.readFileSync("./package.json", { encoding: "utf-8" })
    );

    pkg = {
      ...pkg,
      main: "server.js",
      scripts: {
        build: "npx tsc",
        prestart: "npm run build",
        start: "node dist/server.js",
        watch: "tsc -w",
        dev: "node --watch dist/server.js",
      },
    };
    fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2));
    LOG(`>  Done.`);
  } catch (error) {
    ERROR(error);
    process.exit(1);
  }
}
