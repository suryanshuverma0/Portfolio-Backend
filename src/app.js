import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import trackAnalytics from "./middleware/analytics.middleware.js";

import uploadRoutes from "./routes/upload.routes.js";
import projectRoutes from "./routes/project.routes.js";

import analyticsRoutes from "./routes/analytics.routes.js";

import portfolioContentRoutes from "./routes/portfolioContent.routes.js";

import dashboardRoutes from "./routes/dashboard.routes.js";

import { apiLimiter } from "./middleware/rateLimiter.middleware.js";

dotenv.config();

const app = express();
app.set("trust proxy", 1);

app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",

      "https://suryanshuverma.com.np",

      "https://www.suryanshuverma.com.np",
    ],

    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(trackAnalytics);
app.use(apiLimiter);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/content", portfolioContentRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API running",
  });
});

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
