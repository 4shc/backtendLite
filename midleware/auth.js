const jwt = require ("jsonwebtoken")

module.exports = function(req, res, next){
  // Se lee el token del header
  const token = req.header("x-auth-token")
  // Verificamos que exista un token
  if(!token){
    return res.status(400).json({msg: "Permiso no valido, no tienes un token 😕"})
  }
  // Validamos el token
  try {
    const cifrado = jwt.verify(token.process.env.SECRETA)
    req.usuario = cifrado.usuario
    next()

  } catch (error) {
    res.status(400).json({msg: "El token no es valido🤔"})
  }

}