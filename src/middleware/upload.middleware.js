import multer from "multer";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => {
    const isPdf = file.mimetype === "application/pdf";

    return {
      folder: "portfolio-projects",

      resource_type: "auto",

      use_filename: true,

      unique_filename: false,

      ...(isPdf && {
        format: "pdf",
      }),
    };
  },
});

const upload = multer({
  storage,
});

export default upload;
