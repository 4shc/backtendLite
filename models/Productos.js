
const mongoose  = require ('mongoose');

const productosSchema = mongoose.Schema({

  marca: {
    type: String,
    required: true
  }, 
  categoria: {
    type: String,
    required: true
  }, 
  proveedor: {
    type: String,
    required: true
  }, 
  referencia: {
    type: String,
    required: true
  }, 
  precio: {
    type: Number,
    required: true
  }, 

}, {versionkey: false});

module.exports = mongoose.model('Productos', productosSchema);

