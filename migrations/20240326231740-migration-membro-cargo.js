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
    await queryInterface.createTable('membro_cargo', 
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        membro_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'membros',
            key: 'id'
          }
        },
        igreja_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'igreja',
            key: 'id'
          }
        },
        data_inclusao: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        data_saida: {
          type: Sequelize.DATEONLY,
          allowNull: true
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
        },
        cargo_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'cargos',
            key: 'id'
          }
        }
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
    await queryInterface.dropTable('membro_cargo');
  }
};
