'use strict'
module.exports = (sequelize, DataTypes) => {
  const tipoMaterial = sequelize.define(
    'tipomaterial',
    {
      material: DataTypes.STRING,
    },
    {}
  )
  tipoMaterial.associate = function (models) {
    // associations can be defined here
  }
  return tipoMaterial
}
