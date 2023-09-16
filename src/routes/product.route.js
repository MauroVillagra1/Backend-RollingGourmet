import { Router } from "express";
import { createProduct, deleteProduct, editProduct, getProduct, listProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/products").get(listProducts).post(createProduct)
router.route("/products/:id").put(editProduct).delete(deleteProduct).get(getProduct)
export default router