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
    await queryInterface.createTable('movimentacao', 
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        valor: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        id_movimentacao: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'tipo_movimentacao',
            key: 'id'
          }
        },
        membro_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
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
        tesoureiro_1: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        tesoureiro_2: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        create_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        update_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.fn('current_timestamp')
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
    await queryInterface.dropTable('movimentacao');
  }
};
