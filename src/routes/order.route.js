import { Router } from "express";
import { createOrders, deleteOrders, editOrders, getOrders, listOrders } from "../controllers/order.controller.js";

const router = Router();

router.route("/orders").get(listOrders).post(createOrders)
router.route("/orders/:id").put(editOrders).delete(deleteOrders).get(getOrders)
export default router