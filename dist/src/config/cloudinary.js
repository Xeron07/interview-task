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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const cloudinary = require("cloudinary").v2;
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const keys_1 = __importDefault(require("./keys"));
cloudinary.config({
    cloud_name: keys_1.default.cloudinaryKeys.app_name,
    api_key: keys_1.default.cloudinaryKeys.api_key,
    api_secret: keys_1.default.cloudinaryKeys.app_secret,
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        // async code using `req` and `file`
        // ...
        return {
            folder: keys_1.default.cloudinaryKeys.dir_name,
            allowedFormats: ["jpg", "png"],
            transformation: [{ width: 500, height: 500, crop: "limit" }],
        };
    }),
});
const parser = (0, multer_1.default)({ storage: storage });
exports.default = parser;
//# sourceMappingURL=cloudinary.js.map