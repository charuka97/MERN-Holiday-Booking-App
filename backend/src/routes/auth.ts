import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //Check email is exist
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalied Credentials!" });
      }

      // Check password is match
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Inavailed Credentials!" });
      }

      // create access token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      //attached token to the cookies to access from frontend
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return res.status(200).json({ userID: user._id });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something wenf wrong!" });
    }
  }
);

export default router;