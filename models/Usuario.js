const mongoose = require('mongoose')

const UsuariosSchema = mongoose.Schema({
  nombre: {type: String, require: true, trim: true},
  email: {type: String,require: true,trim: true,unique: true},
  password: {type: String,require: true,trim: true},
  registros: {type: Date,default: Date.now(),trim: true}
})

module.exports = mongoose.model("Usuarios", UsuariosSchema)