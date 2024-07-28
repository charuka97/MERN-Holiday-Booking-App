import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import myHotelRoutes from "./routes/my-hotels";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

// Set up cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() =>
    console.log("Connected to database!", process.env.MONGODB_CONNECTION_STRING)
  );

// Create express app
const app = express();

// Use cookie parser for get auth-token when create a user
app.use(cookieParser());

// convert incoming http request body to json format
app.use(express.json());

//Used to parse incoming http request with URL-encoded payload
app.use(express.urlencoded({ extended: true }));

//Used to handle and provide access to only defined url
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

//map frontend to the backend to run on same server port
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

//user routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, " ../../frontend/dist/index.html"));
});

// start server
app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
