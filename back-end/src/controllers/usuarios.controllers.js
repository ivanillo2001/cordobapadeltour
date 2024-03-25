import conexion from "../../mysql_conector.js";

export const validarUsuario = async (req, res) => {
  try {
      const { user, password } = req.body;
      const [result] = await conexion.query("SELECT COUNT(*) as count FROM usuarios WHERE user = ? AND password = ?", [user, password]);
      const count = result[0].count;
      if (count > 0) {
          res.status(200).json({ valido: true });
      } else {
          res.status(200).json({ valido: false });
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
        const {nombre, puntos, division}= req.body
        const [result] = await conexion.query("INSERT INTO `jugadores`(`idJugador`, `nombre`, `idPareja`, `puntos`, `division`) VALUES (NULL,?,NULL,?,?)",[nombre,puntos,division]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
        });
    }
  };