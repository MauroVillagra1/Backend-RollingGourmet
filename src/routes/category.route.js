import { Router } from "express";
import {
  createCategories,
  listCategories,
} from "../controllers/category.controller.js";
import categoryValidations from "../helpers/categoryValidations.js";

const router = Router();

router
  .route("/categories")
  .get(listCategories)
  .post(categoryValidations, createCategories);

export default router;
