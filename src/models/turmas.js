'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Primeiro estarei passando o id da turma para tabela matricula
      Turmas.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      })
      
      // Aqui estarei passando os atributos de outras tabelas para tabela turmas
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: 'docente_id'
      })
      Turmas.belongsTo(models.Niveis, {
        foreignKey: 'nivel_id'
      })
    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};