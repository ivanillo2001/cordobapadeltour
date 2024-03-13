"use strict"
import { Router } from "express";
import {validarUsuario} from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/usuario",validarUsuario);
export default router;//lo exportamos.