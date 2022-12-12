'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Order,{
        through:models.ProductOrder
      })
    }
  }
  Product.init({
    name:{
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
      notNull: {
        msg: "Please write your name!"
      },
     },
    }, 
    price: {
      type : DataTypes.INTEGER,
      allowNull: false,
     validate: {
      notNull: {
        msg: "Please write a price!"
      },
     },
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
     validate: {
      notNull: {
        msg: "Please write a description"
      },
     },
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    CategoryId:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};