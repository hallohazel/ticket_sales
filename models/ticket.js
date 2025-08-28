'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // Ticket → User (banyak tiket dimiliki 1 user)
      this.belongsTo(models.User, {
        foreignKey: 'userID',
        as: 'ticketUser'
      });

      // Ticket → Event (banyak tiket untuk 1 event)
      this.belongsTo(models.Event, {
        foreignKey: 'eventID',
        as: 'ticketEvent'
      });

      // Ticket → Seat (1 tiket untuk 1 kursi)
      this.belongsTo(models.Seat, {
        foreignKey: 'seatID',
        as: 'ticketSeat'
      });
    }
  }

  Ticket.init({
    ticketID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    seatID: DataTypes.INTEGER,
    bookedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ticket',
    tableName: 'tickets'   // samakan dengan migration
  });

  return Ticket;
};