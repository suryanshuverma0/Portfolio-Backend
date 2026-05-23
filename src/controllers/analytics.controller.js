import Analytics from "../models/analytics.model.js";

/* GET ANALYTICS */

export const getAnalytics =
  async (
    req,
    res
  ) => {

    try {

      /* TOTAL VISITS */

      const totalVisits =
        await Analytics.countDocuments();

      /* UNIQUE VISITORS */

      const uniqueVisitors =
        await Analytics.distinct("ip");

      /* TOP PAGES */

      const topPages =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$path",

              count: {
                $sum: 1,
              },
            },
          },

          {
            $sort: {
              count: -1,
            },
          },

          {
            $limit: 10,
          },
        ]);

      /* DEVICES */

      const devices =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$device",

              count: {
                $sum: 1,
              },
            },
          },
        ]);

      /* BROWSERS */

      const browsers =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$browser",

              count: {
                $sum: 1,
              },
            },
          },
        ]);

      /* DAILY TRAFFIC */

      const dailyTraffic =
        await Analytics.aggregate([

          {
            $group: {

              _id: {

                $dateToString: {

                  format: "%Y-%m-%d",

                  date: "$createdAt",
                },
              },

              visits: {
                $sum: 1,
              },
            },
          },

          {
            $sort: {
              _id: 1,
            },
          },
        ]);

      /* RECENT VISITS */

      const recentVisits =
        await Analytics.find()

          .sort({
            createdAt: -1,
          })

          .limit(10);

      res.status(200).json({

        success: true,

        analytics: {

          totalVisits,

          uniqueVisitors:
            uniqueVisitors.length,

          topPages,

          devices,

          browsers,

          dailyTraffic,

          recentVisits,
        },
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to fetch analytics",
      });
    }
  };

/* TRACK FRONTEND VISITS */

export const trackVisit =
  async (
    req,
    res
  ) => {

    try {

      const {
        path,
      } = req.body;

      await Analytics.create({

        path,

        ip: req.ip,

        browser: "Frontend",

        os: "Frontend",

        device: "Frontend",

        referrer:
          req.headers.referer || "Direct",

      });

      res.status(201).json({

        success: true,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        message:
          "Tracking failed",
      });
    }
  };