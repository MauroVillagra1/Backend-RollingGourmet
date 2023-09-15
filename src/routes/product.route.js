import { Router } from "express";
import { createProduct, listProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/products").get(listProducts).post(createProduct)

export default router