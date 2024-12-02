"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = uploadFiles;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { upload } = require("@evolvingriley/file-upload");
async function uploadFiles() {
    console.log("Starting file upload process...");
    try {
        const result = await upload();
        console.log("Upload process completed successfully.");
        console.log("Result:", result);
    }
    catch (error) {
        console.error("An error occurred during the upload process:");
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error(String(error));
        }
        process.exit(1);
    }
}
// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1);
});
// Execute if run directly
if (require.main === module) {
    uploadFiles();
}
