// using new file-upload package. 
var mkdir_and_download_files = require("@evolvingriley/file-upload").mkdir_and_download_files;
var fs = require('fs');
var path = require('path');
require('dotenv').config();
var BUCKET_NAME = 'digitalgov';
var LOCAL_IMAGE_DIR = './assets/s3-images';
var IMAGE_DATA_DIR = './data/images';
// Run the sync
mkdir_and_download_files();
