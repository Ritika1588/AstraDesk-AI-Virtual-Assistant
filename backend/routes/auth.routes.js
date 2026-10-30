
import express from "express";
import { Login, Logout, signup } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/Login", Login);
authRouter.get("/Logout", Logout);

export default authRouter;
