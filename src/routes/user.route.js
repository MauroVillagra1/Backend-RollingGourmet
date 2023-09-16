import { Router } from "express";
import { createUsers, listUsers } from "../controllers/user.controller.js";

const router = Router();

router.route("/users").get(listUsers).post(createUsers)

export default router