import { check } from "express-validator";
import valResult from "./validationResults.js";

const userValidations = [
  check("Name").notEmpty().withMessage("the name is required").isLength({min:4, max:20}).withMessage('the number of characters in this field must be from 4 to 20. '),
  check("Email").notEmpty().withMessage("the Email is required").isLength({min:6, max:320}).withMessage('the number of characters in this field must be from 6 to 320. '),
  check("Password").notEmpty().withMessage("Error. Password empty").isLength({min: 8 , max: 1000}).withMessage('the number of characters in this field must be from 8 to 1000.'),
  check("State").notEmpty().withMessage(" this field is required"),
  check("ProfilePicture")
    .notEmpty()
    .withMessage("the profile picture is required"),
  check("Role").notEmpty().withMessage("Error. Role is empty"),
  (req, res, next) => {
    valResult(req, res, next);
  },
];

export default userValidations;
