import { Router } from "express";
import { listusers } from "../controllers/user.controller.js";

const router = Router();

router.route("/users").get(listusers)

export default router