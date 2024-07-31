"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const AWS = __importStar(require("@aws-sdk/client-s3"));
const dotenv_1 = require("dotenv");
const fs = __importStar(require("fs"));
const path = require("path");
const promises_1 = require("fs/promises");
const mimeTypes = __importStar(require("mime-types"));
(0, dotenv_1.config)();
const client = new AWS.S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
async function uploadImage(filePath, fileName) {
    try {
        const fileContent = await fs.promises.readFile(filePath);
        const contentType = mimeTypes.lookup(filePath) || "application/octet-stream";
        await client.send(new AWS.PutObjectCommand({
            Bucket: bucketName,
            Key: fileName,
            Body: fileContent,
            ContentType: contentType,
            ACL: "public-read",
        }));
        const url = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
        console.log("Image uploaded successfully. Public URL:", url);
        await fs.promises.unlink(filePath);
        return url;
    }
    catch (error) {
        console.error("Error uploading image", error);
        if (error instanceof Error) {
            console.error("Error message:", error.message);
        }
        if ("$metadata" in error) {
            console.error("Error metadata:", error.$metadata);
        }
    }
}
/**
 * Uploads a file to s3 bucket
 * @param {string} filePath - path of the file
 * @param {string} fileName - name of the file
 */
async function uploadFile(filePath, fileName) {
    try {
        const fileContent = await fs.promises.readFile(filePath);
        await client.send(new AWS.PutObjectCommand({
            Bucket: bucketName,
            Key: `static/${fileName}`,
            Body: fileContent,
            ContentType: "application/octet-stream",
            ACL: "public-read",
        }));
        const url = `https://${bucketName}.s3.amazonaws.com/static/${fileName}`;
        console.log("File uploaded successfully. Public URL:", url);
        await fs.promises.unlink(filePath);
        return url;
    }
    catch (error) {
        console.error("Error uploading file", error);
        if (error instanceof Error) {
            console.error("Error message:", error.message);
        }
        if ("$metadata" in error) {
            console.error("Error metadata:", error.$metadata);
        }
    }
}
/**
 * Removes the image and file working directories
 */
async function cleanup() {
    const imageWorkingDir = "content/uploads/_working-images";
    const fileWorkingDir = "content/uploads/_working-files";
    const deletions = [];
    if (fs.existsSync(imageWorkingDir)) {
        deletions.push((0, promises_1.rm)(imageWorkingDir, { recursive: true, force: true }));
    }
    if (fs.existsSync(fileWorkingDir)) {
        deletions.push((0, promises_1.rm)(fileWorkingDir, { recursive: true, force: true }));
    }
    try {
        await Promise.all(deletions);
        console.log("Cleanup completed");
    }
    catch (error) {
        console.error("Cleanup failed:", error);
        throw error;
    }
}
/**
 * Initiates the upload process for both images and files
 */
const upload = async () => {
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
    }
    catch (error) {
        console.error("Upload process failed:", error);
    }
};
module.exports = upload;
