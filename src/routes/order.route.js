import { Router } from "express";
import { listorders } from "../controllers/order.controller.js";

const router = Router();

router.route("/orders").get(listorders)

export default router