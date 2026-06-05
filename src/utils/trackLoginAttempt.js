import { UAParser } from "ua-parser-js";

import geoip from "geoip-lite";

import LoginAttempt from "../models/loginAttempt.model.js";

const trackLoginAttempt =
  async ({
    req,
    email,
    success,
  }) => {

    try {

      /* USER AGENT */

      const parser =
        new UAParser(

          req.headers["user-agent"]
        );

      const result =
        parser.getResult();

      /* IP */

      const ip =

        req.headers["x-forwarded-for"]?.split(",")[0] ||

        req.socket.remoteAddress ||

        req.ip ||

        "Unknown";

      /* GEO */

      const geo =
        geoip.lookup(ip);

      await LoginAttempt.create({

        email,

        success,

        ip,

        country:
          geo?.country ||

          "Unknown",

        city:
          geo?.city ||

          "Unknown",

        browser:
          result.browser.name ||

          "Unknown",

        os:
          result.os.name ||

          "Unknown",

        device:
          result.device.type ||

          "Desktop",
      });

    } catch (error) {

      console.error(
        "Login Tracking Error:",
        error
      );
    }
  };

export default trackLoginAttempt;

