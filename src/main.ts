#!/usr/bin/env node
"use strict";
import { execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import formatPath from "./formatPath.js";

const scriptPath = formatPath(path.resolve(__dirname, "startElectron.js"));
const args = [scriptPath, ...Array.from(process.argv).slice(2)];
execFileSync(String(require("electron")), args, { stdio: "inherit" });
