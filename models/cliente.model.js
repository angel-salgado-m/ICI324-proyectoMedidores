pool = require("../utils/db.js");

module.exports = {
  // Consulta base
  async list() {
    try {
      conn = await pool.getConnection();
      sql =
        "SELECT idCliente, nombre FROM cliente";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta ALTER 1: Agregar un dato telefono a la tabla cliente
  async con_1() {
    try {
      conn = await pool.getConnection();
      sql = "ALTER TABLE cliente ADD telefono CHAR(10) NULL;";
      const update = await conn.query(sql);
      sql="SELECT * FROM cliente;";
      const rows= await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta ALTER 2: Eliminar columna estado de la tabla registro.
  async con_2() {
    try {
      conn = await pool.getConnection();
      sql = "ALTER TABLE registro DROP COLUMN estado;";
      const update = await conn.query(sql);
      sql="SELECT * FROM registro;";
      const rows= await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta SELECT 1: Mostrar a todos los trabajadores y sus sectores.
  async con_3() {
    try {
      conn = await pool.getConnection();
      sql ="SELECT trabajador.*, sector.sucursal FROM trabajador LEFT JOIN sector ON trabajador.idSectores = sector.idSector;";
      const rows= await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta SELECT 2: Mostrar todas las direcciones y los nombres de los clientes correspondientes.
  async con_4() {
    try {
      conn = await pool.getConnection();
      sql ="SELECT direccion.*, cliente.nombre AS nombre_cliente FROM direccion INNER JOIN cliente ON direccion.idCliente = cliente.idCliente;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta SELECT 3: Seleccionar todos los trabajadores y sus respectivos sectores y rutas:
  async con_5() {
    try {
      conn = await pool.getConnection();
      sql ="SELECT trabajador.*, sector.sucursal, ruta.idRuta FROM trabajador LEFT JOIN sector ON trabajador.idSectores = sector.idSector LEFT JOIN ruta ON sector.idRuta = ruta.idRuta;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta SELECT 4: Obtener todas las direcciones de una sucursal específica:
  async con_6() {
    try {
      conn = await pool.getConnection();
      sql ="SELECT direccion.* FROM direccion INNER JOIN sector ON direccion.idSector = sector.idSector WHERE sector.sucursal = 'Sucursal D';";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta SELECT 5: Listar todos los registros que están en estado 'Concluso' y son del tipo 'Novedad':
  async con_7() {
    try {
      conn = await pool.getConnection();
      sql = "SELECT * FROM registro WHERE registro.estado = 'Concluso' AND registro.tipo = 'Novedad';";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta UPDATE 1: Actualizar el nombre del trabajador de rut '55555555-5' a 'Nuevo Nombre'.
  async con_8() {
    try {
      conn = await pool.getConnection();
      sql ="UPDATE trabajador SET nombre = 'Nuevo Nombre' WHERE rut = '55555555-5';";
      const update = await conn.query(sql);
      sql="SELECT * FROM trabajador;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta UPDATE 2: Actualizar la sucursal del sector con idSector=1 a 'Nueva Sucursal'
  async con_9() {
    try {
      conn = await pool.getConnection();
      sql = "UPDATE sector SET sucursal = 'Nueva Sucursal' WHERE idSector = 1;";
      const update = await conn.query(sql);
      sql = "SELECT * FROM sector;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta INSERT 1: Insertar un nuevo cliente
  async con_10() {
    try {
      conn = await pool.getConnection();
      sql = "INSERT INTO cliente (nombre) VALUES ('Nuevo Cliente');";
      const update = await conn.query(sql);
      sql = "SELECT * FROM cliente;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta INSERT 2: Insertar un nuevo registro
  async con_11() {
    try {
      conn = await pool.getConnection();
      sql = "INSERT INTO registro (rut, idDireccion, tipo, descripcion) VALUES ('123456789', 1, 'Novedad', 'Nueva novedad registrada');";
      const update = await conn.query(sql);
      sql = "SELECT * FROM registro;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta DELETE: Eliminar un trabajador de rut '987654321'
  async con_12() {
    try {
      conn = await pool.getConnection();
      sql ="DELETE FROM trabajador WHERE rut = '987654321';";
      const update = await conn.query(sql);
      sql = "SELECT * FROM trabajador;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Consulta DROP: Eliminar la tabla ruta.
  async con_13() {
    try {
      conn = await pool.getConnection();
      sql ="DROP TABLE ruta;";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },
};
