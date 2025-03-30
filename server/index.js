import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
// config
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connecting to database
connectDB()

// routes
app.use("/api/users", userRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));