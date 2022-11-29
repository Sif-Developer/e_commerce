'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Order);
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your name",
        },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your email",
        },
        isEmail: {
          msg: "Please, introduce a correct form of an email",
        },
      },
    },

    password: DataTypes.STRING,

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your address",
        },
      },
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your address",
        },
      },
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please, introduce your address",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};