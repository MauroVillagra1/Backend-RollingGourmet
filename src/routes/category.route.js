import { Router } from "express";
import {
  createCategories,
  listCategories,
} from "../controllers/category.controller.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/categories")
  .get(listCategories)
  .post(
    [
      check("Category")
        .notEmpty()
        .withMessage('the "category" field is required'),
    ],
    createCategories
  );

export default router;
