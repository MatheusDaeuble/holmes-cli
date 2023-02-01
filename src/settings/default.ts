import { Settings } from "../types/settings";

const defaultSettings: Settings = {
  watch: ["dist"],
  buildWatchCommand: "tsc --watch",
  ext: "js,png,svg,gif,jpeg,css",
  exec: "yalc push --changed",
};

export default defaultSettings;