import { check } from "express-validator";
import valResult from "./validationResults.js";

const categoryValidations = [
  check("Category")
    .notEmpty()
    .withMessage('the "category" field is required')
    .isLength({ min: 4, max: 30 })
    .withMessage("category must be between 4 and 30 characters long")
    .isIn(["Ice creams","Burgers","French fries","Cold drinks","Hot Drinks","Desserts","Salads","Coffee","Sundae","Breakfast","Sweet","Pastries",]).withMessage('enter a valid category'),
  (req, res, next) => {
    valResult(req, res, next);
  },
];

export default categoryValidations;
