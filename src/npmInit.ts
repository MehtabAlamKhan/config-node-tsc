import { execSync } from "node:child_process";
import { GREEN, DEFAULT, LOG, ERROR } from "./constants";

export default function npmInit(): void {
  LOG(`Creating/Updating ${GREEN}package.json ${DEFAULT}file ...`);

  try {
    const result = execSync("npm init -y", { encoding: "utf-8" });
    LOG(`${GREEN}package.json ${DEFAULT}updated.`);
  } catch (error) {
    ERROR(error);
    process.exit(1);
  }
}
