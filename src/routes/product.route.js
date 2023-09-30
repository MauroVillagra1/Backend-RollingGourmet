import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  listProducts,
} from "../controllers/product.controller.js";
import validarJWT from "../helpers/token-verify.js";
import productValidations from "../helpers/productValidations.js";

const router = Router();

router.route("/products").get(listProducts).post([validarJWT], productValidations, createProduct);
router
  .route("/products/:id")
  .put([validarJWT], productValidations, editProduct)
  .delete([validarJWT], deleteProduct)
  .get(getProduct);
export default router;
