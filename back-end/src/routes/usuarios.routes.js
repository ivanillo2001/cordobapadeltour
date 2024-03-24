"use strict"
import { Router } from "express";
import {validarUsuario, obtenerUsuarios} from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/usuario",validarUsuario);
router.get("/usuarios",obtenerUsuarios);

export default router;//lo exportamos.