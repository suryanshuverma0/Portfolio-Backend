import express from "express";
import { login } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { authLimiter } from "../middleware/rateLimiter.middleware.js";

console.log("AUTH ROUTE FILE LOADED");

const router = express.Router();

router.post("/login", authLimiter, login);

router.get("/me", protect, (req, res) => {
  res.status(200).json({
    success: true,
    admin: req.admin,
  });
});

export default router;
