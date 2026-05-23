import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/admin.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("suryanshu", 10);

  const existingAdmin = await Admin.findOne({
    email: "suryanshu@gmail.com",
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit();
  }

  await Admin.create({
    email: "suryanshu@gmail.com",
    password: hashedPassword,
  });

  console.log("Admin created");
  process.exit();
};

createAdmin();