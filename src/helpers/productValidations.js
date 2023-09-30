import { check } from "express-validator";
import valResult from "./validationResults.js";

const productValidations = [
  check("NameProduct")
    .notEmpty()
    .withMessage("product name cannot be null")
    .isLength({ min: 2, max: 50 })
    .withMessage(
      "the product name must be between 2 and 50 characters in length"
    ),
  check("State").notEmpty().withMessage("the state cannot be null"),
  check("Price")
    .notEmpty()
    .withMessage("the price must be entered obligatory")
    .isNumeric()
    .withMessage("the price must be a number")
    .custom((value) => {
      if (value >= 100 && value <= 100000) {
        return true;
      } else {
        throw new Error("price should be in the range of 100 to 100.000");
      }
    }),
  check("Details")
    .notEmpty()
    .withMessage("this field cannot be null")
    .isLength({ min: 20, max: 500 })
    .withMessage("details must be between 20 and 500 characters"),
  check("CategoriesID")
    .notEmpty()
    .withMessage("this field cannot be null")
    .isArray()
    .withMessage("this field must be an array"),
  check("Image")
    .notEmpty()
    .withMessage("the image is mandatory")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Invalid image URL"),
  check("Stock")
    .notEmpty()
    .withMessage("stock cannot be null")
    .isNumeric()
    .withMessage("the stock must be a number")
    .custom((value) => {
      if (value >= 1 && value <= 100) {
        return true;
      } else {
        throw new Error(
          "stock entered outside the allowed range. The minimum is 1 and the maximum is 100 units."
        );
      }
    }),
    (req, res, next)=>{valResult(req,res,next)}
];

export default productValidations;