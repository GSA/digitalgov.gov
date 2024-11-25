// using new file-upload package. 
const { mkdir_and_download_files } = require("@evolvingriley/file-upload");


const fs = require('fs');
const path = require('path');
require('dotenv').config();
const BUCKET_NAME = 'digitalgov';
const LOCAL_IMAGE_DIR = './assets/s3-images';
const IMAGE_DATA_DIR = './data/images';



// Run the sync
mkdir_and_download_files();
