'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('membros', 
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        data_nascimento: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        telefone: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        celular: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        foto: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        profissao: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        tipo_sanguineo: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        rg: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        rg_ssp: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        reservista: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        titulo_eleitor: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        titulo_eleitor_zona: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        titulo_eleitor_secao: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        cpf: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        certidao_nascimento: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        estado_civil: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        data_casamento: {
          type: Sequelize.DATEONLY,
          allowNull: true
        },
        sexo: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        municipio_origem: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'municipios',
            key: 'id'
          }
        },
        grau_instrucao: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        igreja_origem: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        pai_nome: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        mae_nome: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        conjunge_membro_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
          references: {
            model: 'membros',
            key: 'id'
          }
        },        
        conversao_data: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        conversao_igreja: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        conversao_municipio: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'municipios',
            key: 'id'
          }
        },
        batismo_aguas_data: {
          type: Sequelize.DATEONLY,
          allowNull: true
        },
        batismo_aguas_igreja: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        batismo_aguas_municipio: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
          references: {
            model: 'municipios',
            key: 'id'
          }
        },
        batismo_espirito_santo_data: {
          type: Sequelize.DATEONLY,
          allowNull: true
        },
        batismo_espirito_santo_igreja: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        batismo_espirito_santo_municipio: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
          references: {
            model: 'municipios',
            key: 'id'
          }
        },
        filiacao_data: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        logradouro: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        numero: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        bairro: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'bairros',
            key: 'id'
          }
        },
        municipio: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'municipios',
            key: 'id'
          }
        },
        estado: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'estados',
            key: 'id'
          }
        },
        cep: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        create_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        update_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        }

        // pai_membro_id: {
        //   type: Sequelize.INTEGER.UNSIGNED,
        //   allowNull: true,
        //   references: {
        //     model: 'membros',
        //     key: 'id'
        //   }
        // },
        // mae_membro_id: {
        //   type: Sequelize.INTEGER.UNSIGNED,
        //   allowNull: true,
        //   references: {
        //     model: 'membros',
        //     key: 'id'
        //   }
        // },
        // conjunge_nome: {
        //   type: Sequelize.STRING(255),
        //   allowNull: true
        // },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('membros');
  }
};
