import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; 
import userRoutes from "./routes/userRoutes.js"; 

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Routes
app.use("/api/users", userRoutes); 

// Start the server
app.listen(3000, () => console.log("Server is running on port 3000"));
