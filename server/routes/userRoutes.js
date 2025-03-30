import express from "express";
import { loginUser, registerUser } from "../controller/userController";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;  