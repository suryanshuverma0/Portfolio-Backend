import mongoose from "mongoose";

const loginAttemptSchema =
  new mongoose.Schema(
    {
      email: {
        type: String,
      },

      success: {
        type: Boolean,
        default: false,
      },

      ip: {
        type: String,
      },

      country: {
        type: String,
        default: "Unknown",
      },

      city: {
        type: String,
        default: "Unknown",
      },

      browser: {
        type: String,
        default: "Unknown",
      },

      os: {
        type: String,
        default: "Unknown",
      },

      device: {
        type: String,
        default: "Desktop",
      },
    },

    {
      timestamps: true,
    }
  );

const LoginAttempt =
  mongoose.model(
    "LoginAttempt",
    loginAttemptSchema
  );

export default LoginAttempt;

