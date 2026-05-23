import rateLimit from "express-rate-limit";

/* GLOBAL API LIMITER */

export const apiLimiter =
  rateLimit({

    windowMs:
      15 * 60 * 1000,

    max: 100,

    message: {

      success: false,

      message:
        "Too many requests. Please try again later.",
    },
  });

/* LOGIN LIMITER */

export const authLimiter =
  rateLimit({

    windowMs:
      15 * 60 * 1000,

    max: 5,

    standardHeaders: true,

    legacyHeaders: false,

    message: {

      success: false,

      message:
        "Too many login attempts. Try again after 15 minutes.",
    },
  });