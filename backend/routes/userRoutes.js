import express from "express";
import {  register } from "../controllers/userController.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();


router.route("/register").post(register);

export default router;