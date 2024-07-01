import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

//Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

// Create express app
const app = express();

// convert incoming http request body to json format
app.use(express.json());

//Used to parse incoming http request with URL-encoded payload
app.use(express.urlencoded({ extended: true }));

//Used to handle and provide access to only defined url
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint" });
});

// start server
app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
