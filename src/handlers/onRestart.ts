import chalk from "chalk";

export const onRestart = (files: string[]) => {
  console.log(chalk.bold.greenBright("Load"), "-", chalk.italic.underline(files));
  // console.log(chalk.blueBright("Trying to push new yalc package..."));
};
