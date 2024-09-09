import npmInit from "./npmInit";
import execDep from "./execDep";
import validate from "./validate";
import tscInit from "./tscInit";
import editScripts from "./editScripts";
import remove from "./remove";
import { DEFAULT, GREEN, LOG } from "./constants";

const flags = process.argv;

try {
  validate(flags);
  npmInit();
  execDep(flags);
  const inititializeTsc = tscInit();
  editScripts();
  remove();
  inititializeTsc.then(() => {
    LOG(`${GREEN}Finished.${DEFAULT}`);
  });
} catch (error) {
  console.error(error);
}
