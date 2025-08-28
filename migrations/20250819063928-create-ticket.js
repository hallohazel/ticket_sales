'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      ticketID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'events',   // nama tabel parent
          key: 'eventID'     // kolom PK di tabel parent
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'userID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      seatID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'seats',
          key: 'seatID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      bookedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  }
};