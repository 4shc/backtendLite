const express = require("express")
const router = express.Router()
const {check} = require ("express-validator")
const usuariosController = require("../controllers/usuariosControllers")

// Creamos la ruta usuarios -- api/usuarios

router.post(
  "/", [
    check("nombre", "El nombre debe ser obligatorio").not().isEmpty(),
    check("email", "Agregue un email valido").isEmail(),
    check("password", "El password debe tener mínimo 8 caracteres").isLength({
      min: 8,
    }),
  ],
  usuariosController.crearUsuario
)
module.exports = router

