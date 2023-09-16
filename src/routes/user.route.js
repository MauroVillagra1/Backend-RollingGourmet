import { Router } from "express";
import { createUsers, listUsers, login } from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(listUsers).post(login)
router.route("/users").post(createUsers)
export default router