import asyncHandler from "express-async-handler";
import { loginAdmin } from "../services/auth.service.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await loginAdmin(email, password);

  res.status(200).json({
    success: true,
    token: result.token,
    admin: {
      id: result.admin._id,
      email: result.admin.email,
    },
  });
});