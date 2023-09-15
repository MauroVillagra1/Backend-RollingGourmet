import { Router } from "express";
import { listcategories } from "../controllers/category.controller.js";

const router = Router();

router.route("/categories").get(listcategories)

export default router