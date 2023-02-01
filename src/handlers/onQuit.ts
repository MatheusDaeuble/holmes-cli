import chalk from "chalk";

export const onQuit = () => {
  console.log(`${chalk.redBright("Stopping watching...")}`)
  process.exit();
}
