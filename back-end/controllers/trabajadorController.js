const mysql2 = require('mysql2/promise');
const connectionConfig = require('../utils/db.js');

const createConnection = async ( ) => {
    return await mysql2.createConnection(connectionConfig);
}

const getAllTrabajadores = async (req, res) => {

    try{
        const connection = await createConnection();
        console.log("funciona la wea")
        const [rows] = await connection.execute('SELECT * from trabajador');
        await connection.end();

    return res.status(200).json({
        success: true,
        trabajadores: rows
    });

    } catch(error) {
        return res.status(500).json({
            status: false,
            error: "Problema al obtener el trabajador",
            code: error
        });
    }

};

const getTrabajadorByCargo = async (req, res) => {
    try {
      const cargo = req.params.cargo;
      const connection = await createConnection();
      const [rows] = await connection.execute('SELECT * FROM trabajador WHERE cargo = ?', [cargo]);
      await connection.end();
  
      return res.status(200).json({
        success: true,
        trabajadores: rows
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: "Problema al obtener el cliente",
        code: error
      });
    }
};

module.exports = {
    getAllTrabajadores,
    getTrabajadorByCargo
};
