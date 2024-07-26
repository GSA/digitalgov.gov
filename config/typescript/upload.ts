import * as AWS from "@aws-sdk/client-s3";
import { config } from "dotenv";
import * as fs from "fs";
import path = require("path");
import { rm } from "fs/promises";
import * as mimeTypes from "mime-types";

config();

const client = new AWS.S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const bucketName = "digitalgov";
const imageDir = "content/uploads/_working-images/processed/";
const fileDir = "content/uploads/_working-files/to-process/";

/**
 * Uploads an image to s3 bucket
 * @param {string} filePath - path of the file
 * @param {string} fileName - name of the file
 */
async function uploadImage(
  filePath: string,
  fileName: string
): Promise<string | undefined> {
  try {
    const fileContent = await fs.promises.readFile(filePath);
    const contentType =
      mimeTypes.lookup(filePath) || "application/octet-stream";
    await client.send(
      new AWS.PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent,
        ContentType: contentType,
        ACL: "public-read",
      })
    );

    const url = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
    console.log("Image uploaded successfully. Public URL:", url);

    await fs.promises.unlink(filePath);
    return url;
  } catch (error: Error | any) {
    console.error("Error uploading image", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    if ("$metadata" in error) {
      console.error("Error metadata:", (error as any).$metadata);
    }
  }
}

/**
 * Uploads a file to s3 bucket
 * @param {string} filePath - path of the file
 * @param {string} fileName - name of the file
 */
async function uploadFile(
  filePath: string,
  fileName: string
): Promise<string | undefined> {
  try {
    const fileContent = await fs.promises.readFile(filePath);

    await client.send(
      new AWS.PutObjectCommand({
        Bucket: bucketName,
        Key: `static/${fileName}`,
        Body: fileContent,
        ContentType: "application/octet-stream",
        ACL: "public-read",
      })
    );

    const url = `https://${bucketName}.s3.amazonaws.com/static/${fileName}`;
    console.log("File uploaded successfully. Public URL:", url);

    await fs.promises.unlink(filePath);
    return url;
  } catch (error: Error | any) {
    console.error("Error uploading file", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    if ("$metadata" in error) {
      console.error("Error metadata:", (error as any).$metadata);
    }
  }
}

/**
 * Removes the image and file working directories
 */
async function cleanup(): Promise<void> {
  const imageWorkingDir = "content/uploads/_working-images";
  const fileWorkingDir = "content/uploads/_working-files";

  const deletions = [];

  if (fs.existsSync(imageWorkingDir)) {
    deletions.push(rm(imageWorkingDir, { recursive: true, force: true }));
  }

  if (fs.existsSync(fileWorkingDir)) {
    deletions.push(rm(fileWorkingDir, { recursive: true, force: true }));
  }

  try {
    await Promise.all(deletions);
    console.log("Cleanup completed");
  } catch (error) {
    console.error("Cleanup failed:", error);
    throw error;
  }
}

/**
 * Initiates the upload process for both images and files
 */
const upload = async (): Promise<void> => {
  const imageDirExists = fs.existsSync(imageDir);
  const imageFiles = imageDirExists ? fs.readdirSync(imageDir) : [];

  const fileDirExists = fs.existsSync(fileDir);
  const fileFiles = fileDirExists ? fs.readdirSync(fileDir) : [];

  try {
    // Upload image files
    for (const file of imageFiles) {
      const filePath = path.join(imageDir, file);
      await uploadImage(filePath, file);
    }

    // Upload static files
    for (const file of fileFiles) {
      const filePath = path.join(fileDir, file);
      await uploadFile(filePath, file);
    }

    console.log("All uploads completed successfully.");

    // Run cleanup after uploads
    await cleanup();
  } catch (error) {
    console.error("Upload process failed:", error);
  }
};

export = upload;
