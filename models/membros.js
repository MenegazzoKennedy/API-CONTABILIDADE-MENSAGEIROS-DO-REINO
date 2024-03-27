const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membros', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    telefone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    celular: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profissao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tipo_sanguineo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rg: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rg_ssp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reservista: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    titulo_eleitor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    titulo_eleitor_zona: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    titulo_eleitor_secao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    certidao_nascimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado_civil: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data_casamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    municipio_origem: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'municipios',
        key: 'id'
      }
    },
    grau_instrucao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    igreja_origem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pai_membro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'membros',
        key: 'id'
      }
    },
    pai_nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mae_membro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'membros',
        key: 'id'
      }
    },
    mae_nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conjunge_membro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'membros',
        key: 'id'
      }
    },
    conjunge_nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversao_data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    conversao_igreja: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    conversao_municipio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'municipios',
        key: 'id'
      }
    },
    batismo_aguas_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batismo_aguas_igreja: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    batismo_aguas_municipio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'municipios',
        key: 'id'
      }
    },
    batismo_espirito_santo_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batismo_espirito_santo_igreja: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    batismo_espirito_santo_municipio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'municipios',
        key: 'id'
      }
    },
    filiacao_data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bairro: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bairros',
        key: 'id'
      }
    },
    municipio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'municipios',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'id'
      }
    },
    cep: {
      type: DataTypes.INTEGER,
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
    tableName: 'membros',
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
        name: "pai_membro_id",
        using: "BTREE",
        fields: [
          { name: "pai_membro_id" },
        ]
      },
      {
        name: "mae_membro_id",
        using: "BTREE",
        fields: [
          { name: "mae_membro_id" },
        ]
      },
      {
        name: "conjunge_membro_id",
        using: "BTREE",
        fields: [
          { name: "conjunge_membro_id" },
        ]
      },
      {
        name: "municipio_origem",
        using: "BTREE",
        fields: [
          { name: "municipio_origem" },
        ]
      },
      {
        name: "conversao_municipio",
        using: "BTREE",
        fields: [
          { name: "conversao_municipio" },
        ]
      },
      {
        name: "batismo_aguas_municipio",
        using: "BTREE",
        fields: [
          { name: "batismo_aguas_municipio" },
        ]
      },
      {
        name: "batismo_espirito_santo_municipio",
        using: "BTREE",
        fields: [
          { name: "batismo_espirito_santo_municipio" },
        ]
      },
      {
        name: "bairro",
        using: "BTREE",
        fields: [
          { name: "bairro" },
        ]
      },
      {
        name: "municipio",
        using: "BTREE",
        fields: [
          { name: "municipio" },
        ]
      },
      {
        name: "estado",
        using: "BTREE",
        fields: [
          { name: "estado" },
        ]
      },
    ]
  });
};
