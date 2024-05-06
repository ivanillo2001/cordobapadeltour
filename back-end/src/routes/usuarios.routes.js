"use strict"
import { Router } from "express";
import {validarUsuario, obtenerUsuarios, obtenerDivisiones,obtenerJugadores, crearJugador, jugadoresPrimera, jugadoresSegunda, obtenerJugador, eliminarJugador, modificarPareja, crearPartido, crearPareja, mostrarPartidos} from "../controllers/usuarios.controllers.js";

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
router.post('/jugadores/modificarPareja',modificarPareja)
router.post('/jugadores/crearPareja',crearPareja)
router.post('/partidos/crearPartido',crearPartido)
router.get('/partidos/mostrarPartidos',mostrarPartidos)
export default router;//lo exportamos.