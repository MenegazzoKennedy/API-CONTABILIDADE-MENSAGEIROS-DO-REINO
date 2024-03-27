const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimentacao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_movimentacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tipo_movimentacao',
        key: 'id'
      }
    },
    membro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'membros',
        key: 'id'
      }
    },
    igreja_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'igreja',
        key: 'id'
      }
    },
    tesoureiro_1: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    tesoureiro_2: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    create_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    update_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'movimentacao',
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
        name: "id_movimentacao",
        using: "BTREE",
        fields: [
          { name: "id_movimentacao" },
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
        name: "tesoureiro_1",
        using: "BTREE",
        fields: [
          { name: "tesoureiro_1" },
        ]
      },
      {
        name: "tesoureiro_2",
        using: "BTREE",
        fields: [
          { name: "tesoureiro_2" },
        ]
      },
    ]
  });
};
