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
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('membros', 'pai_membro_id', 
          {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
              model: 'membros',
              key: 'id'
            }
          }, { transaction: t }
        ),
        queryInterface.addColumn('membros', 'mae_membro_id', 
          {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
              model: 'membros',
              key: 'id'
            }
          }, { transaction: t }
        ),
        queryInterface.addColumn('membros', 'conjunge_nome', 
          {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
              model: 'membros',
              key: 'id'
            }
          }, { transaction: t }
        )
      ])
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('membros', 'pai_membro_id', { transaction: t }),
        queryInterface.removeColumn('membros', 'mae_membro_id', { transaction: t }),
        queryInterface.removeColumn('membros', 'conjunge_nome', { transaction: t })
      ]);
    });
  }
};
