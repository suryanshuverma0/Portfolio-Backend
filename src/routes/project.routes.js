import express from "express";

import {
  createProjectController,
  deleteProjectController,
  getProjectByIdController,
  getProjectsController,
  getSingleProjectController,
  updateProjectController,
} from "../controllers/project.controller.js";

import { protect } from "../middleware/auth.middleware.js";

import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.get(
  "/",
  getProjectsController
);

router.get(
  "/edit/:id",
  protect,
  getProjectByIdController
);

router.get(
  "/:slug",
  getSingleProjectController
);

router.post(
  "/",
  protect,

  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },

    {
      name: "galleryImages",
      maxCount: 10,
    },
  ]),

  createProjectController
);

router.put(
  "/:id",
  protect,

  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },

    {
      name: "galleryImages",
      maxCount: 10,
    },
  ]),

  updateProjectController
);

router.delete(
  "/:id",
  protect,
  deleteProjectController
);

export default router;