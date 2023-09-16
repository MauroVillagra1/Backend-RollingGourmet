import { Router } from "express";
import { createProduct, deleteProduct, editProduct, listProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/products").get(listProducts).post(createProduct)
router.route("/products/:id").put(editProduct).delete(deleteProduct)
export default router