import express from "express";

import {

  getAnalytics,
  trackVisit,

} from "../controllers/analytics.controller.js";

import {
  protect,
} from "../middleware/auth.middleware.js";

const router =
  express.Router();

/* TRACK FRONTEND VISITS */

router.post(
  "/track",
  trackVisit
);

/* ADMIN ANALYTICS */

router.get(
  "/",
  protect,
  getAnalytics
);

export default router;