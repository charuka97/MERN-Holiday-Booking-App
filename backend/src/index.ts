import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import cookieParser from "cookie-parser";

//Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

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

//user routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// start server
app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
