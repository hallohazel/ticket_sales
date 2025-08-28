'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('seats', [
      {
        eventID: 1,
        rowNum: "A",
        seatNum: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventID: 1,
        rowNum: "A",
        seatNum: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventID: 1,
        rowNum: "B",
        seatNum: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('seats', null, {});
  }
};