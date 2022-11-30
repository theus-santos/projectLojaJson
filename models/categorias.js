'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
     static associate(models) {
      // define association here
      this.hasMany(models.Produtos, {
        as: 'produtos',
        foreignKey: 'categoriaId'
      })
    }
  }
  Categorias.init({
    categoria: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorias',
    tableName: 'categorias'
  });
  return Categorias;
};