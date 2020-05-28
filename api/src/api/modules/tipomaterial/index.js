const { Router } = require('express')
const materialController = require('./tipomaterial.controller')
const authetication = require('../../middlewares/authentication.middleware')
const materialRoutes = Router()

materialRoutes.post('/material', authetication, materialController.createMaterial)

module.exports = materialRoutes
