import express from "express";
import { userSignup } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/user/register", userSignup);

export default userRouter;