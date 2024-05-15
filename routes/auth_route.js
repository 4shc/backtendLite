const express = require("express")
const router = express.Router()
const {check} = require ("express-validator")
const authController = require("../controllers/authControllers")
const auth = require ("../midleware/auth")

// autenticar un usuario -- // api/auth

router.post(
  "/", [
    check("email", "Digite un email valido").isEmail(),
    check("password", "El password debe tener mínimo 8 catéteres").isLength({
      min: 8,
    }),
  ],
  authController.autenticarusuario
)

router.get("/", auth, authController.usuarioAutenticado)
module.exports = router