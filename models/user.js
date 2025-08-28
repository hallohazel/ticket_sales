'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User → Ticket (1 user bisa beli banyak tiket)
      this.hasMany(models.Ticket, {
        foreignKey: 'userID',
        as: "buyTickets"
      });
    }
  }

  User.init({
    userID: {   // kecil semua biar konsisten dengan migration
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'   // samakan dengan migration
  });

  return User;
};