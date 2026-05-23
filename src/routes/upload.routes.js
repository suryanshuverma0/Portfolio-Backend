// import express from "express";
// import upload from "../middleware/upload.middleware.js";
// import { protect } from "../middleware/auth.middleware.js";

// const router = express.Router();

// router.post(
//   "/",
//   protect,
//   upload.single("image"),
//   (req, res) => {
//     console.log(req.file);
//     res.status(200).json({
//       success: true,
//       imageUrl: req.file.path,
//     });
//   }
// );

// export default router;

import express from "express";

import upload from "../middleware/upload.middleware.js";

import {
  protect,
} from "../middleware/auth.middleware.js";

const router =
  express.Router();

router.post(

  "/",

  protect,

  upload.single("file"),

  (req, res) => {

    res.status(200).json({

      success: true,

      fileUrl:
        req.file.path,
    });
  }
);

export default router;