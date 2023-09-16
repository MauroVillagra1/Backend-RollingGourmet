import { Router } from "express";
import { createOrders, listOrders } from "../controllers/order.controller.js";

const router = Router();

router.route("/orders").get(listOrders).post(createOrders)

export default router