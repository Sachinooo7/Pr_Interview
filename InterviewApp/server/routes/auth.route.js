import express from "express";
import { logOut } from "../controllers/auth.controller.js";
import { googleAuth } from "../controllers/auth.controller.js";
import jwt from "jsonwebtoken"

const authRouter=express.Router()

authRouter.post("/google",googleAuth)
authRouter.get("/logout",logOut)

export default authRouter