import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB()



app.listen(3000, () => console.log("Server is running on port 3000"));