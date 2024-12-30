import { upload } from "@evolvingriley/file-upload";

async function uploadFiles(): Promise<void> {
  console.log("Starting file upload process...");
  try {
    const result = await upload();
    console.log("Upload process completed successfully.");
    console.log("Result:", result);
  } catch (error: unknown) {
    console.error("An error occurred during the upload process:");
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1);
  }
);

// Execute if run directly
if (require.main === module) {
  uploadFiles();
}

export default uploadFiles;
