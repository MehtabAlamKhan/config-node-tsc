import { execSync } from "child_process";
import { LOG, ERROR, GREEN, DEFAULT } from "./constants";

export default function remove(): void {
  try {
    LOG(`Removing ${GREEN}config-node-tsc${DEFAULT} ...`);

    execSync(`npm uninstall config-node-tsc`);
    LOG(`>  Package removed.`);
  } catch (error) {
    ERROR(error);
    process.exit(1);
  }
}
