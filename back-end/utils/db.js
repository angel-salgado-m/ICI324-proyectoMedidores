const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = {
  getConnection() {
    return new Promise(function (res, rej) {
      pool
        .getConnection()
        .then(function (conn) {
          console.log("BD Conectada.")
          res(conn);
        })
        .catch(function (error) {
          console.log("Error al conectar con la BD.")
          rej(error);
        });
    });
  },
};