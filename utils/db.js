
const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

module.exports = {
    async getConnection() {
        try {
            const connection = await pool.getConnection();
            return connection;
        } catch (error) {
            throw error;
        }
    },
};
