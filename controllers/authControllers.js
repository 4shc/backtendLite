const Usuario = require("../models/Usuario")
const bcryptjs = require("bcryptjs")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")

exports.autenticarusuario = async (req, res) =>{
  
  // Verificar si existen errores
  const errores = validationResult(req)
  if(!errores.isEmpty()){
    return res.status(400).json({errores: errores.array()})
  }

  const {email, password} = req.body

  try {
    // Verificamos que usuario este registrado
    let usuario = await Usuario.findOne({email})
    if(!usuario){
      return res.status(400).json({msg: 'El Usuario no esta registrado'})
    }
    // Verificamos password
    const passCorrecto = await bcryptjs.compare(password, usuario.password)
    if(!passCorrecto){
      return res.status(400).json({msg: 'La contraseña es incorrecta'})
    }
    // Si todo Ok SE FIRMA EL TOKEN
    const payload = {
      usuario : {id: usuario.id},
    }

    jwt.sign(
      payload,
      process.env.SECRETA,
      {expiresIn : 43200,}, // El token expiraría en una hora
      (error, token) => {
        if(error) throw error
          // Mensaje de confirmación
          res.json({token})
      }
    )

  } catch (error) {
    console.log("Hay un error")
    console.log(error)
    res.status(400).send("Hubo un error")
  }

}

exports.usuarioAutenticado = async (req, res) =>{
  try {
    const usuario = await Usuario.findById(req.usuario.id)
    res.json({usuario})
  } catch (error) {
    res.status(400).json({msg: "Error al autenticar usuario 🤐"})
  }

}
