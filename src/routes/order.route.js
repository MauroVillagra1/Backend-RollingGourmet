import { Router } from "express";
import {
  createOrders,
  deleteOrders,
  editOrders,
  getOrders,
  listOrders,
} from "../controllers/order.controller.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/orders")
  .get(listOrders)
  .post(
    [
      check("quantity")
        .notEmpty()
        .withMessage("The quantity field is required"),
    ],
    createOrders
  );
router.route("/orders/:id").put(editOrders).delete(deleteOrders).get(getOrders);
export default router;
