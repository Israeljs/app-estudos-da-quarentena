'use strict'
module.exports = (sequelize, DataTypes) => {
  const tipoMaterial = sequelize.define(
    'tipomaterial',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      material: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  )
  tipoMaterial.associate = function (models) {
    // associations can be defined here
  }
  return tipoMaterial
}
