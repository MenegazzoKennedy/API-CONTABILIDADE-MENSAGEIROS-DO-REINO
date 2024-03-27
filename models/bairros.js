const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bairros', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    localidade_estado_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'id'
      }
    },
    localidade_municipio_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'municipios',
        key: 'id'
      }
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bairros',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "localidade_bairro_localidade_estado_id_foreign",
        using: "BTREE",
        fields: [
          { name: "localidade_estado_id" },
        ]
      },
      {
        name: "localidade_bairro_localidade_municipio_id_foreign",
        using: "BTREE",
        fields: [
          { name: "localidade_municipio_id" },
        ]
      },
    ]
  });
};
