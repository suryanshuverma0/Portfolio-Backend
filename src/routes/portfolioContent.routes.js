import express from "express";

import {
  getPortfolioContent,
  updatePortfolioContent,
} from "../controllers/portfolioContent.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/* GET */

router.get("/", getPortfolioContent);

/* UPDATE */

router.put("/", protect, updatePortfolioContent);

export default router;
