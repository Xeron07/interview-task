import multer from "multer";
const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";
import keys from "./keys";

cloudinary.config({
  cloud_name: keys.cloudinaryKeys.app_name,
  api_key: keys.cloudinaryKeys.api_key,
  api_secret: keys.cloudinaryKeys.app_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // async code using `req` and `file`
    // ...
    return {
      folder: keys.cloudinaryKeys.dir_name,
      allowedFormats: ["jpg", "png"],
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    };
  },
});
const parser = multer({ storage: storage });

export default parser;
