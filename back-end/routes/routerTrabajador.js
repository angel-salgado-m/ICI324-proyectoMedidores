const Router = require("express");

const { getAllTrabajadores, getTrabajadorByCargo } = require("../controllers/trabajadorController.js");

const router = Router();

router.get('/allTrabajadores', getAllTrabajadores);
router.get('/trabajador/:cargo', getTrabajadorByCargo);

module.exports = router;
