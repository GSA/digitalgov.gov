# Image and File Upload Processing

This set of scripts provides functionality for uploading, processing, and managing images and files in a web application. The scripts work together to handle various tasks such as file normalization, image resizing, file uploading to Amazon S3, and generating necessary metadata files.

## Overview

The image and file upload processing feature consists of the following scripts:

1. `file-prep.js`: Prepares the uploaded files by normalizing filenames, creating necessary directories, and generating YAML metadata files.

2. `file-process.js`: Processes the uploaded images by creating responsive variants and compressing the original image.

3. `upload.js`: Uploads the processed images and files to Amazon S3 and cleans up temporary directories.
> [!NOTE]
> This script is derived from typescript code located in ./config/typescript/upload.ts. 

If you want to make edits to this code you must recompile the javascript for upload.js, run the following command from the root directory.

```shell
npm i -g typescript
```  

Then run this: 
```
tsc 
```

4. `scripts.js`: Bundles and compiles JavaScript files using webpack.

5. `styles.js`: Compiles SASS stylesheets, copies USWDS fonts and images, and generates SVG sprites.

## Usage

To use the image and file upload processing feature, follow these steps:

1. Place the uploaded images and files in the designated upload directory (`content/uploads/_inbox`).

2. Run the `npx gulp upload` command to execute the entire upload process, including file preparation, image processing, and uploading to Amazon S3.

The `gulp upload` command will perform the following steps:
- Normalize filenames, create necessary directories, and generate YAML metadata files.
- Process the uploaded images by creating responsive variants and compressing the original image.
- Upload the processed images and files to Amazon S3.
- Clean up temporary directories.

## Configuration

- The upload directories and file paths can be configured in the `filePaths` object in `file-prep.js`.
- The variant settings for image resizing can be modified in the `variantSettings` object in `file-process.js`.
- The Amazon S3 bucket and credentials should be configured in the `.env` file and `file-upload.js`.

## Dependencies

The scripts rely on the following dependencies:

- `gulp`: Task runner for automating build processes.
- `sharp`: Image processing library for resizing and compressing images.
- `aws-sdk` and `gulp-awspublish`: Libraries for uploading files to Amazon S3.
- `webpack` and related plugins: Tools for bundling and compiling JavaScript files.
- `sass` and related plugins: Tools for compiling SASS stylesheets.

Make sure to install the required dependencies before running the scripts.

## Notes

- The scripts assume a specific directory structure and naming conventions. Modifying the paths and settings will break the upload process.
- Ensure that the necessary permissions and credentials are properly configured for accessing Amazon S3.

For more detailed information about each script and its functionality, refer to the comments and documentation within the individual files.