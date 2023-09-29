import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  listProducts,
} from "../controllers/product.controller.js";
import { check } from "express-validator";
import validarJWT from "../helpers/token-verify.js";



const router = Router();

router
  .route("/products")
  .get(listProducts)
  .post(
    [validarJWT
    //   check("NameProduct")
    //     .notEmpty()
    //     .withMessage("Product name cannot be empty")
    //     .isLength({ min: 2, max: 50 })
    //     .withMessage("Product name must be between 2 and 50 characters"),
    //   check("Price")
    //     .notEmpty()
    //     .withMessage("Price cannot be empty")
    //     .isNumeric()
    //     .withMessage("The price must be a number")
    //     .custom((value) => {
    //       if (value >= 100 && value <= 100000) {
    //         return true;
    //       } else {
    //         throw new Error("The price must be between 100 and 100000");
    //       }
    //     }),
    //   check("Image")
    //     .notEmpty()
    //     .withMessage("Image cannot be empty")
    //     .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    //     .withMessage("A valid url image must be included"),
    //     //Aqui iria la categorias, pero no funciona asi nuestras categorias
    ],
    createProduct
  );
router
  .route("/products/:id")
  .put([validarJWT], editProduct)
  .delete([validarJWT], deleteProduct)
  .get(getProduct);
export default router;
