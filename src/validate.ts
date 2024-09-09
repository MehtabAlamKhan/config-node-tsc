import { GREEN, YELLOW, LOG, ERROR, DEFAULT } from "./constants";

export default function validate(flags: string[]): void {
  if (
    flags[2] &&
    (flags[2] !== "--express" || (flags[2] === "--express" && flags[3]))
  ) {
    ERROR(
      `"${
        flags[3] ? flags[3] : flags[2]
      }" is not part of the command. Please use any one of the following -`
    );
    LOG(
      `For empty project with typescript configured -> ${GREEN}npx config-node-tsc${DEFAULT}`
    );
    LOG(
      `For empty project with typescript and express -> ${GREEN}npx config-node-tsc --express${DEFAULT}`
    );
    process.exit(1);
  }
}
