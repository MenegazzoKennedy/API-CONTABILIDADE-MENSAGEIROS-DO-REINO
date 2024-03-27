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
    await queryInterface.createTable('igreja', 
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        data_fundacao: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        create_date: {
          type: Sequelize.DATE,
          allowNull: false
        },
        update_date: {
          type: Sequelize.DATE,
          allowNull: false
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
    await queryInterface.dropTable('igreja');
  }
};
