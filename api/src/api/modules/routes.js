const { Router } = require('express')
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')
const comentarioRoutes = require('./comentario')
const materialRoutes = require('./tipomaterial')

const routes = Router()

routes.use(materialRoutes)
routes.use(usuarioRoutes)
routes.use(postRoutes)
routes.use(comentarioRoutes)

module.exports = routes
