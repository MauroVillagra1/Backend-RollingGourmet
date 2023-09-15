import { Router } from "express";
import { listproducts } from "../controllers/category.controller.js";

const router = Router();

router.route("/category").get(listproducts)

export default router