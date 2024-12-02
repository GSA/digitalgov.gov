"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using new file-upload package.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { mkdir_and_download_files } = require("@evolvingriley/file-upload");
require("dotenv/config");
// Run the sync
mkdir_and_download_files();
