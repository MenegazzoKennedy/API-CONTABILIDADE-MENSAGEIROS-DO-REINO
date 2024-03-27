var DataTypes = require("sequelize").DataTypes;
var _bairros = require("./bairros");
var _cargos = require("./cargos");
var _estados = require("./estados");
var _igreja = require("./igreja");
var _logs = require("./logs");
var _membro_cargo = require("./membro_cargo");
var _membro_igreja = require("./membro_igreja");
var _membro_obreiro = require("./membro_obreiro");
var _membros = require("./membros");
var _movimentacao = require("./movimentacao");
var _municipios = require("./municipios");
var _obreiros = require("./obreiros");
var _tipo_movimentacao = require("./tipo_movimentacao");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var bairros = _bairros(sequelize, DataTypes);
  var cargos = _cargos(sequelize, DataTypes);
  var estados = _estados(sequelize, DataTypes);
  var igreja = _igreja(sequelize, DataTypes);
  var logs = _logs(sequelize, DataTypes);
  var membro_cargo = _membro_cargo(sequelize, DataTypes);
  var membro_igreja = _membro_igreja(sequelize, DataTypes);
  var membro_obreiro = _membro_obreiro(sequelize, DataTypes);
  var membros = _membros(sequelize, DataTypes);
  var movimentacao = _movimentacao(sequelize, DataTypes);
  var municipios = _municipios(sequelize, DataTypes);
  var obreiros = _obreiros(sequelize, DataTypes);
  var tipo_movimentacao = _tipo_movimentacao(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  membros.belongsTo(bairros, { as: "bairro_bairro", foreignKey: "bairro"});
  bairros.hasMany(membros, { as: "membros", foreignKey: "bairro"});
  membro_cargo.belongsTo(cargos, { as: "cargo", foreignKey: "cargo_id"});
  cargos.hasMany(membro_cargo, { as: "membro_cargos", foreignKey: "cargo_id"});
  bairros.belongsTo(estados, { as: "localidade_estado", foreignKey: "localidade_estado_id"});
  estados.hasMany(bairros, { as: "bairros", foreignKey: "localidade_estado_id"});
  membros.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(membros, { as: "membros", foreignKey: "estado"});
  municipios.belongsTo(estados, { as: "localidade_estado", foreignKey: "localidade_estado_id"});
  estados.hasMany(municipios, { as: "municipios", foreignKey: "localidade_estado_id"});
  membro_cargo.belongsTo(igreja, { as: "igreja", foreignKey: "igreja_id"});
  igreja.hasMany(membro_cargo, { as: "membro_cargos", foreignKey: "igreja_id"});
  membro_igreja.belongsTo(igreja, { as: "igreja", foreignKey: "igreja_id"});
  igreja.hasMany(membro_igreja, { as: "membro_igrejas", foreignKey: "igreja_id"});
  membro_obreiro.belongsTo(igreja, { as: "igreja", foreignKey: "igreja_id"});
  igreja.hasMany(membro_obreiro, { as: "membro_obreiros", foreignKey: "igreja_id"});
  membro_cargo.belongsTo(membros, { as: "membro", foreignKey: "membro_id"});
  membros.hasMany(membro_cargo, { as: "membro_cargos", foreignKey: "membro_id"});
  membro_igreja.belongsTo(membros, { as: "membro", foreignKey: "membro_id"});
  membros.hasMany(membro_igreja, { as: "membro_igrejas", foreignKey: "membro_id"});
  membro_obreiro.belongsTo(membros, { as: "membro", foreignKey: "membro_id"});
  membros.hasMany(membro_obreiro, { as: "membro_obreiros", foreignKey: "membro_id"});
  membros.belongsTo(membros, { as: "pai_membro", foreignKey: "pai_membro_id"});
  membros.hasMany(membros, { as: "membros", foreignKey: "pai_membro_id"});
  membros.belongsTo(membros, { as: "mae_membro", foreignKey: "mae_membro_id"});
  membros.hasMany(membros, { as: "mae_membro_membros", foreignKey: "mae_membro_id"});
  membros.belongsTo(membros, { as: "conjunge_membro", foreignKey: "conjunge_membro_id"});
  membros.hasMany(membros, { as: "conjunge_membro_membros", foreignKey: "conjunge_membro_id"});
  movimentacao.belongsTo(membros, { as: "membro", foreignKey: "membro_id"});
  membros.hasMany(movimentacao, { as: "movimentacaos", foreignKey: "membro_id"});
  usuarios.belongsTo(membros, { as: "membro", foreignKey: "membro_id"});
  membros.hasMany(usuarios, { as: "usuarios", foreignKey: "membro_id"});
  bairros.belongsTo(municipios, { as: "localidade_municipio", foreignKey: "localidade_municipio_id"});
  municipios.hasMany(bairros, { as: "bairros", foreignKey: "localidade_municipio_id"});
  membros.belongsTo(municipios, { as: "municipio_origem_municipio", foreignKey: "municipio_origem"});
  municipios.hasMany(membros, { as: "membros", foreignKey: "municipio_origem"});
  membros.belongsTo(municipios, { as: "conversao_municipio_municipio", foreignKey: "conversao_municipio"});
  municipios.hasMany(membros, { as: "conversao_municipio_membros", foreignKey: "conversao_municipio"});
  membros.belongsTo(municipios, { as: "batismo_aguas_municipio_municipio", foreignKey: "batismo_aguas_municipio"});
  municipios.hasMany(membros, { as: "batismo_aguas_municipio_membros", foreignKey: "batismo_aguas_municipio"});
  membros.belongsTo(municipios, { as: "batismo_espirito_santo_municipio_municipio", foreignKey: "batismo_espirito_santo_municipio"});
  municipios.hasMany(membros, { as: "batismo_espirito_santo_municipio_membros", foreignKey: "batismo_espirito_santo_municipio"});
  membros.belongsTo(municipios, { as: "municipio_municipio", foreignKey: "municipio"});
  municipios.hasMany(membros, { as: "municipio_membros", foreignKey: "municipio"});
  membro_obreiro.belongsTo(obreiros, { as: "obreiro", foreignKey: "obreiro_id"});
  obreiros.hasMany(membro_obreiro, { as: "membro_obreiros", foreignKey: "obreiro_id"});
  movimentacao.belongsTo(tipo_movimentacao, { as: "id_movimentacao_tipo_movimentacao", foreignKey: "id_movimentacao"});
  tipo_movimentacao.hasMany(movimentacao, { as: "movimentacaos", foreignKey: "id_movimentacao"});
  logs.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(logs, { as: "logs", foreignKey: "usuario_id"});
  movimentacao.belongsTo(usuarios, { as: "tesoureiro_1_usuario", foreignKey: "tesoureiro_1"});
  usuarios.hasMany(movimentacao, { as: "movimentacaos", foreignKey: "tesoureiro_1"});
  movimentacao.belongsTo(usuarios, { as: "tesoureiro_2_usuario", foreignKey: "tesoureiro_2"});
  usuarios.hasMany(movimentacao, { as: "tesoureiro_2_movimentacaos", foreignKey: "tesoureiro_2"});

  return {
    bairros,
    cargos,
    estados,
    igreja,
    logs,
    membro_cargo,
    membro_igreja,
    membro_obreiro,
    membros,
    movimentacao,
    municipios,
    obreiros,
    tipo_movimentacao,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
