import { execSync } from "node:child_process";
import { BLUE, GREEN, DEFAULT, YELLOW, LOG, ERROR } from "./constants";

export default function execDep(flags: string[]): void {
  try {
    if (flags[2] === "--express") {
      LOG(
        `Installing ${GREEN}express${DEFAULT} as dependency and ${GREEN}@types/express ${DEFAULT}as dev dependency ...`
      );

      const ex = execSync(`npm i express`, { encoding: "utf-8" });
      const exTypes = execSync(`npm i -D @types/express`, {
        encoding: "utf-8",
      });
      LOG(`>  Done.`);
    }

    LOG(
      `Installing dependencies required for ${BLUE}Typescript ${DEFAULT}as dev dependencies ...`
    );
    LOG(`Installing ${GREEN}typescript ${GREEN}@types/node${DEFAULT} ...`);

    const devDep = execSync("npm i -D typescript @types/node", {
      encoding: "utf-8",
    });
    LOG(`>  Done.`);
  } catch (error) {
    ERROR(error);
    process.exit(1);
  }
}
