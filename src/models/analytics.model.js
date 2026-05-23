import mongoose from "mongoose";

const analyticsSchema =
  new mongoose.Schema(
    {

      path: {
        type: String,
      },

      ip: {
        type: String,
      },

      country: {
        type: String,
      },

      city: {
        type: String,
      },

      browser: {
        type: String,
      },

      os: {
        type: String,
      },

      device: {
        type: String,
      },

      referrer: {
        type: String,
      },

    },

    {
      timestamps: true,
    }
  );

const Analytics =
  mongoose.model(
    "Analytics",
    analyticsSchema
  );

export default Analytics;