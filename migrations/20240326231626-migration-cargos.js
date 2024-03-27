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
    await queryInterface.createTable('cargos', 
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(255),
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
    await queryInterface.dropTable('cargos');
  }
};
