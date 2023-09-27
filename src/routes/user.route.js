import { Router } from "express";
import { createUsers, editUser, listUsers, login } from "../controllers/user.controller.js";
import { editProduct } from "../controllers/product.controller.js";
import validarJWT from "../helpers/token-verify.js";

const router = Router();

router.route("/").get([validarJWT],listUsers).post(login)
router.route("/users").post(createUsers)
router.route("/users/:id").put([validarJWT],editUser)
router.route("/user/admin").post([validarJWT],createUsers)
export default router