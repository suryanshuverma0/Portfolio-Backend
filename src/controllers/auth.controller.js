
import asyncHandler from "express-async-handler";

import { loginAdmin } from "../services/auth.service.js";

import trackLoginAttempt from "../utils/trackLoginAttempt.js";

export const login =
  asyncHandler(
    async (
      req,
      res
    ) => {

      const {
        email,
        password,
      } = req.body;

      try {

        const result =
          await loginAdmin(
            email,
            password
          );

        /* TRACK SUCCESSFUL LOGIN */

        await trackLoginAttempt({

          req,

          email,

          success: true,
        });

        res.status(200).json({

          success: true,

          token:
            result.token,

          admin: {

            id:
              result.admin._id,

            email:
              result.admin.email,
          },
        });

      } catch (error) {

        /* TRACK FAILED LOGIN */

        await trackLoginAttempt({

          req,

          email,

          success: false,
        });

        throw error;
      }
    }
  );
