'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      // Seat → Ticket (1 seat punya 1 ticket)
      this.hasOne(models.Ticket, {
        foreignKey: "seatID",
        as: "seatTicket"
      });

      // Seat → Event (banyak seat milik 1 event)
      this.belongsTo(models.Event, {
        foreignKey: "eventID",
        as: "seatEvent"
      });
    }
  }

  Seat.init({
    seatID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventID: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rowNum: DataTypes.STRING,
    seatNum: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seat',
    tableName: 'seats'   // penting: biar nyambung dengan migration
  });

  return Seat;
};