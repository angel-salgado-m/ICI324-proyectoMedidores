const Router = require("express");

const { getAllTrabajadores, getTrabajadorByCargo, updateNombreTrabajador } = require("../controllers/trabajadorController.js");

const router = Router();

router.get('/allTrabajadores', getAllTrabajadores);
router.get('/trabajador/:cargo', getTrabajadorByCargo);
router.put('/trabajador/:rut', updateNombreTrabajador);

module.exports = router;
