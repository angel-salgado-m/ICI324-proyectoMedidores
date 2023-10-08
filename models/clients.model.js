pool = require("../utils/db.js");

module.exports = {

    async list(){

        try{
            conn = await pool.getConnection();
            sql = "SELECT * FROM cliente";
            const rows = await conn.query(sql);
            conn.end();
            return rows;
        }
        catch(errr){
            throw errr;
        }
    }
};