"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { upload } = require('@evolvingriley/file-upload');
function uploadTask(cb) {
    console.log("Starting file upload process...");
    try {
        const result = upload();
        console.log("Upload process completed successfully.");
        console.log("Result:", result);
        cb();
    }
    catch (error) {
        console.error("An error occurred during the upload process:");
        console.error(error.message);
        cb(error);
    }
}
module.exports = uploadTask;
// Optional: Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
