import Analytics from "../models/analytics.model.js";

import { UAParser } from "ua-parser-js";

const trackAnalytics = async (req, res, next) => {
  try {
    /* SKIP ADMIN */
    if (
      req.originalUrl.includes("/admin") ||
      req.originalUrl.includes("/api/v1/analytics")
    ) {
      return next();
    }

    const parser = new UAParser(req.headers["user-agent"]);

    const result = parser.getResult();

    await Analytics.create({
      path: req.originalUrl,

      ip: req.ip,

      browser: result.browser.name || "Unknown",

      os: result.os.name || "Unknown",

      device: result.device.type || "Desktop",

      referrer: req.headers.referer || "Direct",
    });
  } catch (error) {
    console.error("Analytics Error:", error);
  }

  next();
};

export default trackAnalytics;
