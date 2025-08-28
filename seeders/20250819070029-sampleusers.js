'use strict';
const md5 = require('md5');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstname: "albus",
        lastname: "dumbledore",
        email: "albus@gmail.com",
        password: md5("12345"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "harry",
        lastname: "potter",
        email: "harry@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "ron",
        lastname: "weasly",
        email: "ron@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};