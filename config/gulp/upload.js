"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var AWS = require("@aws-sdk/client-s3");
var dotenv_1 = require("dotenv");
var fs = require("fs");
var path = require("path");
var promises_1 = require("fs/promises");
(0, dotenv_1.config)();
var client = new AWS.S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
var bucketName = "digitalgov";
var imageDir = "content/uploads/_working-images/processed/";
var fileDir = "content/uploads/_working-files/to-process/";
function uploadImage(filePath, fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var fileContent, url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fs.promises.readFile(filePath)];
                case 1:
                    fileContent = _a.sent();
                    return [4 /*yield*/, client.send(new AWS.PutObjectCommand({
                            Bucket: bucketName,
                            Key: fileName,
                            Body: fileContent,
                            ContentType: "image/jpeg", // Adjust content type as needed
                            ACL: "public-read"
                        }))];
                case 2:
                    _a.sent();
                    url = "https://".concat(bucketName, ".s3.amazonaws.com/").concat(fileName);
                    console.log("Image uploaded successfully. Public URL:", url);
                    return [4 /*yield*/, fs.promises.unlink(filePath)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, url];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error uploading image", error_1);
                    if (error_1 instanceof Error) {
                        console.error("Error message:", error_1.message);
                    }
                    if ('$metadata' in error_1) {
                        console.error("Error metadata:", error_1.$metadata);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function uploadFile(filePath, fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var fileContent, url, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fs.promises.readFile(filePath)];
                case 1:
                    fileContent = _a.sent();
                    return [4 /*yield*/, client.send(new AWS.PutObjectCommand({
                            Bucket: bucketName,
                            Key: "static/".concat(fileName),
                            Body: fileContent,
                            ContentType: "application/octet-stream",
                            ACL: "public-read"
                        }))];
                case 2:
                    _a.sent();
                    url = "https://".concat(bucketName, ".s3.amazonaws.com/static/").concat(fileName);
                    console.log("File uploaded successfully. Public URL:", url);
                    return [4 /*yield*/, fs.promises.unlink(filePath)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, url];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error uploading file", error_2);
                    if (error_2 instanceof Error) {
                        console.error("Error message:", error_2.message);
                    }
                    if ('$metadata' in error_2) {
                        console.error("Error metadata:", error_2.$metadata);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function cleanup() {
    return __awaiter(this, void 0, void 0, function () {
        var imageWorkingDir, fileWorkingDir, deletions, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imageWorkingDir = "content/uploads/_working-images";
                    fileWorkingDir = "content/uploads/_working-files";
                    deletions = [];
                    if (fs.existsSync(imageWorkingDir)) {
                        deletions.push((0, promises_1.rm)(imageWorkingDir, { recursive: true, force: true }));
                    }
                    if (fs.existsSync(fileWorkingDir)) {
                        deletions.push((0, promises_1.rm)(fileWorkingDir, { recursive: true, force: true }));
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(deletions)];
                case 2:
                    _a.sent();
                    console.log('Cleanup completed');
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Cleanup failed:', error_3);
                    throw error_3;
                case 4: return [2 /*return*/];
            }
        });
    });
}
var upload = function () { return __awaiter(void 0, void 0, void 0, function () {
    var imageDirExists, imageFiles, fileDirExists, fileFiles, _i, imageFiles_1, file, filePath, _a, fileFiles_1, file, filePath, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                imageDirExists = fs.existsSync(imageDir);
                imageFiles = imageDirExists ? fs.readdirSync(imageDir) : [];
                fileDirExists = fs.existsSync(fileDir);
                fileFiles = fileDirExists ? fs.readdirSync(fileDir) : [];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 11, , 12]);
                _i = 0, imageFiles_1 = imageFiles;
                _b.label = 2;
            case 2:
                if (!(_i < imageFiles_1.length)) return [3 /*break*/, 5];
                file = imageFiles_1[_i];
                filePath = path.join(imageDir, file);
                return [4 /*yield*/, uploadImage(filePath, file)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                _a = 0, fileFiles_1 = fileFiles;
                _b.label = 6;
            case 6:
                if (!(_a < fileFiles_1.length)) return [3 /*break*/, 9];
                file = fileFiles_1[_a];
                filePath = path.join(fileDir, file);
                return [4 /*yield*/, uploadFile(filePath, file)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _a++;
                return [3 /*break*/, 6];
            case 9:
                console.log("All uploads completed successfully.");
                // Run cleanup after uploads
                return [4 /*yield*/, cleanup()];
            case 10:
                // Run cleanup after uploads
                _b.sent();
                return [3 /*break*/, 12];
            case 11:
                error_4 = _b.sent();
                console.error("Upload process failed:", error_4);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
module.exports = upload;
