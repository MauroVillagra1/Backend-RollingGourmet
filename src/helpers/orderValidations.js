import { check } from "express-validator";
import valResult from "./validationResults.js";

const orderValidations = [
    check("Order")
      .notEmpty()
      .withMessage(
        "The order is not correctly created, please check and try again."
      ),
    check("IdUser")
      .notEmpty()
      .withMessage("Error in IdUser field. Check and try again."),
    check("NameUser")
      .notEmpty()
      .withMessage(
        "There is an error in the NameUser field or it is empty. Please check."
      ),
    check("State")
      .notEmpty()
      .withMessage("State field not valid. Please check")
      .isString()
      .withMessage("the 'State' value received must be a string"),
    check("Adress")
      .notEmpty()
      .withMessage("Address field error. Please check."),
    check("Date")
      .notEmpty()
      .withMessage("Error in the Date field. Check and try again."),

      (req, res, next)=>{valResult(req,res,next)}
  ]

  export default orderValidations;