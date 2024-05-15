// Exportamos nuestro modelo
const Productos = require('../models/Productos');

// Creamos una función para agregar productos
exports.agregarProductos = async(req, res) => {
  try {
    let productos = new Productos(req.body)
    await productos.save();
    res.send(productos);
    
  } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al agregar un producto 😕')
  }
}

// Creamos la función para mostrar clientes
exports.mostrarProductos = async (req, res) => {
  try {
    const productos = await Productos.find();
    res.json({productos});
    
  } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al mostrar un cliente 😕')
  }
}

// Creamos la función para mostrar un solo producto
exports.mostrarUnProducto = async(req, res) =>{
  try {
    let productos = await Productos.findById(req.params.id);
    if(!productos){
      res.status(404).send("No se encuentra el producto con ese ID")
    }
    res.send(productos);

  } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al buscar un producto 😕');
  }
}

// Creamos la función para eliminar productos
exports.eliminarProductos = async(req, res) =>{
  try {
    let productos = await Productos.findById(req.params.id);

    if(!productos){
      res.status(404).json({msg: "El producto no existe"});
      return
    }

    await Productos.findOneAndDelete({_id: req.params.id});
    res.json({msg: "El producto fue eliminado"});
    
  } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al eliminar un producto 😕')
  }
}

// Creamos la función para modificar un producto
exports.modificarProductos = async(req, res) =>{
  try {
    let productos = await Productos.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(!productos){
      return res.status(404).send("Producto no encontrado"); 
    }
    res.json({ msg: "Producto modificado correctamente", productos });
  } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al modificar un producto😕');
  }
} 