import { ObjectId } from "mongodb";
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