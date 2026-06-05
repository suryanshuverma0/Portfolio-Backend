// import Analytics from "../models/analytics.model.js";

// /* GET ANALYTICS */

// export const getAnalytics =
//   async (
//     req,
//     res
//   ) => {

//     try {

//       /* TOTAL VISITS */

//       const totalVisits =
//         await Analytics.countDocuments();

//       /* UNIQUE VISITORS */

//       const uniqueVisitors =
//         await Analytics.distinct(
//           "sessionId"
//         );

//       /* TOP PAGES */

//       const topPages =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$path",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },

//           {
//             $sort: {
//               count: -1,
//             },
//           },

//           {
//             $limit: 10,
//           },
//         ]);

//       /* DEVICES */

//       const devices =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$device",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },
//         ]);

//       /* BROWSERS */

//       const browsers =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$browser",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },
//         ]);

//       /* OPERATING SYSTEMS */

//       const operatingSystems =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$os",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },
//         ]);

//       /* COUNTRIES */

//       const countries =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$country",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },

//           {
//             $sort: {
//               count: -1,
//             },
//           },

//           {
//             $limit: 10,
//           },
//         ]);

//       /* CITIES */

//       const cities =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$city",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },

//           {
//             $sort: {
//               count: -1,
//             },
//           },

//           {
//             $limit: 10,
//           },
//         ]);

//       /* SOURCES */

//       const sources =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: "$source",

//               count: {
//                 $sum: 1,
//               },
//             },
//           },
//         ]);

//       /* VERIFY PAGE VISITS */

//       const verifyVisits =
//         await Analytics.countDocuments({

//           path: "/verify",
//         });

//       /* QR SCANS */

//       const qrScans =
//         await Analytics.countDocuments({

//           source: "qr",
//         });

//       /* DAILY TRAFFIC */

//       const dailyTraffic =
//         await Analytics.aggregate([

//           {
//             $group: {

//               _id: {

//                 $dateToString: {

//                   format: "%Y-%m-%d",

//                   date: "$createdAt",
//                 },
//               },

//               visits: {
//                 $sum: 1,
//               },
//             },
//           },

//           {
//             $sort: {
//               _id: 1,
//             },
//           },
//         ]);

//       /* RECENT VISITS */

//       const recentVisits =
//         await Analytics.find()

//           .sort({
//             createdAt: -1,
//           })

//           .limit(15);

//       res.status(200).json({

//         success: true,

//         analytics: {

//           totalVisits,

//           uniqueVisitors:
//             uniqueVisitors.length,

//           verifyVisits,

//           qrScans,

//           topPages,

//           devices,

//           browsers,

//           operatingSystems,

//           countries,

//           cities,

//           sources,

//           dailyTraffic,

//           recentVisits,
//         },
//       });

//     } catch (error) {

//       console.error(error);

//       res.status(500).json({

//         success: false,

//         message:
//           "Failed to fetch analytics",
//       });
//     }
//   };

// /* TRACK FRONTEND VISITS */

// export const trackVisit =
//   async (
//     req,
//     res
//   ) => {

//     try {

//       const {
//         path,
//         source,
//         sessionId,
//       } = req.body;

//       await Analytics.create({

//         path,

//         source:
//           source ||
//           "direct",

//         sessionId:
//           sessionId ||
//           "anonymous",

//         ip: req.ip,

//         browser:
//           "Frontend",

//         os:
//           "Frontend",

//         device:
//           "Frontend",

//         referrer:

//           req.headers.referer ||

//           "Direct",
//       });

//       res.status(201).json({

//         success: true,
//       });

//     } catch (error) {

//       console.error(error);

//       res.status(500).json({

//         success: false,

//         message:
//           "Tracking failed",
//       });
//     }
//   };






import Analytics from "../models/analytics.model.js";

import LoginAttempt from "../models/loginAttempt.model.js";

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

      /* UNIQpreUE VISITORS */

      const uniqueVisitors =
        await Analytics.distinct(
          "sessionId"
        );

      /* VERIFY PAGE VISITS */

      const verifyVisits =
        await Analytics.countDocuments({

          path: "/verify",
        });

      /* QR SCANS */

      const qrScans =
        await Analytics.countDocuments({

          source: "qr",
        });

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

      /* OPERATING SYSTEMS */

      const operatingSystems =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$os",

              count: {
                $sum: 1,
              },
            },
          },
        ]);

      /* COUNTRIES */

      const countries =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$country",

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

      /* CITIES */

      const cities =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$city",

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

      /* SOURCES */

      const sources =
        await Analytics.aggregate([

          {
            $group: {

              _id: "$source",

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

          .limit(15);

      /* LOGIN ANALYTICS */

      const totalLoginAttempts =
        await LoginAttempt.countDocuments();

      const failedLogins =
        await LoginAttempt.countDocuments({

          success: false,
        });

      const successfulLogins =
        await LoginAttempt.countDocuments({

          success: true,
        });

      const recentLoginAttempts =
        await LoginAttempt.find()

          .sort({
            createdAt: -1,
          })

          .limit(10);

      const loginCountries =
        await LoginAttempt.aggregate([

          {
            $group: {

              _id: "$country",

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

      res.status(200).json({

        success: true,

        analytics: {

          totalVisits,

          uniqueVisitors:
            uniqueVisitors.length,

          verifyVisits,

          qrScans,

          topPages,

          devices,

          browsers,

          operatingSystems,

          countries,

          cities,

          sources,

          dailyTraffic,

          recentVisits,

          totalLoginAttempts,

          failedLogins,

          successfulLogins,

          recentLoginAttempts,

          loginCountries,
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
        source,
        sessionId,
      } = req.body || {};

      await Analytics.create({

        path:
          path || "/",

        source:
          source || "direct",

        sessionId:
          sessionId || "anonymous",

        ip:

          req.headers["x-forwarded-for"]?.split(",")[0] ||

          req.socket.remoteAddress ||

          req.ip ||

          "Unknown",

        browser:
          "Frontend",

        os:
          "Frontend",

        device:
          "Frontend",

        country:
          "Unknown",

        city:
          "Unknown",

        referrer:

          req.headers.referer ||

          "Direct",
      });

      res.status(201).json({

        success: true,
      });

    } catch (error) {

      console.error(
        "TRACK VISIT ERROR:",
        error
      );

      res.status(500).json({

        success: false,

        message:
          "Tracking failed",
      });
    }
  };

