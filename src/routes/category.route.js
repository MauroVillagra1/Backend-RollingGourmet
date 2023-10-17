import { Router } from "express";
import {
  listCategories,
} from "../controllers/category.controller.js";

const router = Router();

router
  .route("/categories")
  .get(listCategories);

export default router;
