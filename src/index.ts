#!/usr/bin/env node
"use strict";
import nodemon from "nodemon";
import concurrently from "concurrently";
import fs from "fs";
import path from "path";
import { Settings } from "./types/settings";
import { EVENTS } from "./enums/events.enum";
import { onQuit, onRestart, onStart } from "./handlers";
import defaultSettings from "./settings/default";

let projectSettings: Partial<Settings> = {};

try {
  projectSettings = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), ".holmesrc"), "utf8")
  );
} catch {}

const settings: Settings = { ...projectSettings, ...defaultSettings };

nodemon(settings);

nodemon
  .on(EVENTS.START, onStart)
  .on(EVENTS.QUIT, onQuit)
  .on(EVENTS.RESTART, onRestart);

concurrently([settings.buildWatchCommand]);
