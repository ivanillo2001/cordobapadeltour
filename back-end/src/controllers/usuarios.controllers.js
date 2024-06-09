import conexion from "../../mysql_conector.js";

export const validarUsuario = async (req, res) => {
    try {
      const { user, password } = req.body;
      // Realizar la consulta para obtener los jugadores y el rol que coinciden con las credenciales
      const result = await conexion.query("SELECT rol FROM jugadores WHERE username = ? AND password = ?", [user, password]);
      // Verificar si se encontraron jugadores con las credenciales proporcionadas
      if (result[0] !='') {
        // Si se encontraron jugadores, devolver el rol y los jugadores
        const rol = result[0];
        res.status(200).json({ valido: true, rol});
      } else {
        // Si no se encontraron jugadores, devolver un mensaje indicando que las credenciales son inválidas
        res.status(200).json({ valido: false, message: "Credenciales inválidas" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  };

export const obtenerUsuarios = async (req, res) => {
    try {
        const { user, password } = req.body;
        const [result] = await conexion.query("SELECT user FROM usuarios");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };

  export const obtenerDivisiones = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM divisiones");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };
  export const obtenerJugadores = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT idJugador, nombre FROM jugadores");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };
  export const crearJugador = async (req, res) => {
    try {
        const {nombre, puntos, division,usuario,password, imagen}= req.body
        const [result] = await conexion.query("INSERT INTO `jugadores`(`idJugador`, `nombre`, `idPareja`, `puntos`, `division`,`username`,`password`,`foto`) VALUES (NULL,?,NULL,?,?,?,?,?)",[nombre,puntos,division,usuario, password, imagen]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };

  export const editarJugador = async (req, res) => {
    try {
      const { idJugador, nombre, puntos, division, rol } = req.body;
      const [result] = await conexion.query(
        "UPDATE jugadores SET nombre = ?, puntos = ?, division = ?, rol = ? WHERE idJugador = ?",
        [nombre, puntos, division, rol, idJugador]
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  };

  export const jugadoresPrimera = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM jugadores where division = 1 order by puntos desc");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };

  export const jugadoresSegunda = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM jugadores where division = 2 order by puntos desc");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };

  export const obtenerJugador = async (req, res) => {
    try {
      const { nombre } = req.body;
      console.log(req.body);
      const [result] = await conexion.query("SELECT * FROM jugadores WHERE nombre = ?", [nombre]);
      
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  };

  export const eliminarJugador = async (req, res) => {
    try {
      const { idJugador } = req.body;
      // Corrección aquí: Se necesita un '?' para el placeholder de nombre
      const [result] = await conexion.query("delete FROM jugadores WHERE idJugador = ?", [idJugador]);
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  };
  export const modificarPareja = async (req, res) => {
    try {
      const { idJugador1, idJugador2 } = req.body;
      const [result] = await conexion.query(
        "UPDATE jugadores SET idPareja = CASE idJugador " +
        "WHEN ? THEN ? " +
        "WHEN ? THEN ? " +
        "END " +
        "WHERE idJugador IN (?, ?)",
        [idJugador1, idJugador2, idJugador2, idJugador1, idJugador1, idJugador2]
      );
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  };

  export const crearPartido = async (req, res) => {
    try {
        const {pareja1,pareja2,set1,set2,set3, division}= req.body;
        console.log(req.body);
        const result = await conexion.query("INSERT INTO partido(idPartido,set1,set2,set3, division,id_pareja1,id_pareja2) VALUES (NULL,?,?,?,?,?,?)",[set1,set2,set3, division,pareja1,pareja2]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };

  export const crearPareja = async (req, res) => {
    try {
        const {idJugador1,idJugador2,division,nombre_jugador1,nombre_jugador2}= req.body;
        console.log(req.body);
        const result = await conexion.query("INSERT INTO pareja(id_pareja, id_jugador1, id_jugador2, fecha_creacion, es_activa, division,nombre_jugador1, nombre_jugador2) VALUES (NULL,?,?,NOW(),1,?,?,?)",[idJugador1,idJugador2,division,nombre_jugador1,nombre_jugador2]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };

  export const mostrarPartidos = async (req, res) => {
    try {
      const { division } = req.body;

      const [result] = await conexion.query("SELECT * FROM partido WHERE division = ?", [division]);
      console.log(req.body);
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  };

  export const obtenerParejasDivision = async(req,res)=>{
    try {
      const {division}= req.body;
      const [result]= await conexion.query("SELECT * FROM pareja WHERE division = ? order by fecha_creacion desc limit 5",[division]);
      res.status(200).json(result)
      console.log(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  }

  export const obtenerJugadoresParejas= async(req,res)=>{
    try {
      const {idPareja}= req.body;
      const [result]= await conexion.query("SELECT * FROM pareja WHERE id_pareja = ?",[idPareja]);
      res.status(200).json(result)
      console.log(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error en el servidor",
      });
    }
  }