const pool = require('../utils/db.js');

const getAllClientes = async (req, res) => {

    try{
    const conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT * FROM cliente");
    await conn.end();

    return res.status(200).json({
        success: true,
        usuarios: rows
    });

    } catch(error) {
        return res.status(500).json({
            status: false,
            error: "Problema al obtener el cliente",
            code: error
        });
    }

};

module.exports = {
    getAllClientes
};
