'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('estados', [
      {"id" : 1, "titulo" : 'CEARÁ', "sigla" : 'CE'},
      {"id" : 2, "titulo" : 'MARANHÃO', "sigla" : 'MA'},
      {"id" : 3, "titulo" : 'PARAÍBA', "sigla" : 'PB'},
      {"id" : 4, "titulo" : 'PIAUÍ', "sigla" : 'PI'},
      {"id" : 5, "titulo" : 'BAHIA', "sigla" : 'BA'},
      {"id" : 6, "titulo" : 'PERNAMBUCO', "sigla" : 'PE'},
      {"id" : 7, "titulo" : 'PARÁ', "sigla" : 'PA'},
      {"id" : 8, "titulo" : 'RIO GRANDE DO NORTE', "sigla" : 'RN'},
      {"id" : 9, "titulo" : 'ALAGOAS', "sigla" : 'AL'},
      {"id" : 10, "titulo" : 'SERGIPE', "sigla" : 'SE'},
      {"id" : 11, "titulo" : 'TOCANTINS', "sigla" : 'TO'},
      {"id" : 12, "titulo" : 'DISTRITO FEDERAL', "sigla" : 'DF'},
      {"id" : 13, "titulo" : 'GOIÁS', "sigla" : 'GO'},
      {"id" : 14, "titulo" : 'ACRE', "sigla" : 'AC'},
      {"id" : 15, "titulo" : 'AMAZONAS', "sigla" : 'AM'},
      {"id" : 16, "titulo" : 'RORAIMA', "sigla" : 'RR'},
      {"id" : 17, "titulo" : 'RONDÔNIA', "sigla" : 'RO'},
      {"id" : 18, "titulo" : 'AMAPÁ', "sigla" : 'AP'},
      {"id" : 19, "titulo" : 'MATO GROSSO', "sigla" : 'MT'},
      {"id" : 20, "titulo" : 'MATO GROSSO DO SUL', "sigla" : 'MS'},
      {"id" : 21, "titulo" : 'MINAS GERAIS', "sigla" : 'MG'},
      {"id" : 22, "titulo" : 'ESPÍRITO SANTO', "sigla" : 'ES'},
      {"id" : 23, "titulo" : 'RIO DE JANEIRO', "sigla" : 'RJ'},
      {"id" : 24, "titulo" : 'SÃO PAULO', "sigla" : 'SP'},
      {"id" : 25, "titulo" : 'PARANÁ', "sigla" : 'PR'},
      {"id" : 26, "titulo" : 'SANTA CATARINA', "sigla" : 'SC'},
      {"id" : 27, "titulo" : 'RIO GRANDE DO SUL', "sigla" : 'RS'},
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('estados', null, {});
  }
};
