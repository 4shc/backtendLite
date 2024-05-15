const express = require("express")
const ConectarBD = require("./config/db")
const cors = require("cors")

// Creamos el servidor
const app = express()
// Configuramos el puerto
const PORT = process.env.PORT || 5000
// Conectamos con la base de datos
ConectarBD()
// Habilitamos 'cors'
app.use(cors())
// Habilitamos express con json
app.use(express.json({extend : true}))

// Creamos las rutas del proyecto
app.use("/api/usuarios", require("./routes/usuarios_route"))
app.use("/api/auth", require("./routes/auth_route"))
app.use('/api/clientes', require('./routes/cliente_route'))
app.use('/api/productos', require('./routes/productos_route'));

// Config server
app.listen(PORT, () =>{
  console.log("⚡Server running  OK⚡")
})