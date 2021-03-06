'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    description: DataTypes.STRING,
    endTime: DataTypes.DATE,
    winnerId: DataTypes.INTEGER,
    isClosed: DataTypes.BOOLEAN,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};