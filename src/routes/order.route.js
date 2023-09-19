import { Router } from "express";
import { createOrders, deleteOrders, getOrders, listOrders } from "../controllers/order.controller.js";

const router = Router();

router.route("/orders").get(listOrders).post(createOrders)
router.route("/orders/:id").delete(deleteOrders).get(getOrders)
export default router