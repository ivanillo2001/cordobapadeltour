"use strict"
import { Router } from "express";
import {validarUsuario, obtenerUsuarios, obtenerDivisiones,obtenerJugadores, crearJugador, jugadoresPrimera, jugadoresSegunda, obtenerJugador, eliminarJugador} from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/usuario",validarUsuario);
router.get("/usuarios",obtenerUsuarios);
router.get("/divisiones",obtenerDivisiones);
router.get("/jugadores/mostrarJugadores",obtenerJugadores)
router.get("/jugadores/primeraDivision",jugadoresPrimera)
router.get("/jugadores/segundaDivision",jugadoresSegunda)
router.post("/jugadores/crearJugador",crearJugador)
router.post("/jugadores/obtenerJugador",obtenerJugador)
router.post("/jugadores/eliminarJugador",eliminarJugador)

export default router;//lo exportamos.