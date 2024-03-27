const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membro_obreiro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    membro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'membros',
        key: 'id'
      }
    },
    obreiro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'obreiros',
        key: 'id'
      }
    },
    igreja_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'igreja',
        key: 'id'
      }
    },
    data_inclusao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'membro_obreiro',
    timestamps: false,
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
        name: "membro_id",
        using: "BTREE",
        fields: [
          { name: "membro_id" },
        ]
      },
      {
        name: "obreiro_id",
        using: "BTREE",
        fields: [
          { name: "obreiro_id" },
        ]
      },
      {
        name: "igreja_id",
        using: "BTREE",
        fields: [
          { name: "igreja_id" },
        ]
      },
    ]
  });
};
