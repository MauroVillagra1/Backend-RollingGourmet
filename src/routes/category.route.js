import { Router } from "express";
import { createCategories, listCategories } from "../controllers/category.controller.js";

const router = Router();

router.route("/categories").get(listCategories).post(createCategories)

export default router