import { Router } from "express";
import { createUsers, editUser, listUsers, login } from "../controllers/user.controller.js";
import validarJWT from "../helpers/token-verify.js";
import userValidations from "../helpers/userValidations.js";

const router = Router();

router.route("/").get([validarJWT],listUsers).post(login)
router.route("/users").post(createUsers)
router.route("/users/:id").put([validarJWT], userValidations, editUser)
router.route("/user/admin").post([validarJWT], userValidations, createUsers)
export default router