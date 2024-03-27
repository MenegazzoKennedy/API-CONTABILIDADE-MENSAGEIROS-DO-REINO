const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membro_igreja', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    data_saida: {
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
    tableName: 'membro_igreja',
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
        name: "igreja_id",
        using: "BTREE",
        fields: [
          { name: "igreja_id" },
        ]
      },
    ]
  });
};
