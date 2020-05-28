const { tipomaterial: Material } = require('../../../database/models')

class TipoMaterialController {
  async createMaterial(req, res, next) {
    try {
      const material = await Material.create({
        ...req.body,
      })
      return res.json(material)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new TipoMaterialController()
