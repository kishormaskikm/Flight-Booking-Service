'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Enum } = require("../utils/common");
const { PENDING , CONFIRMED, INITIATED,CANCELLED,BOOKED} = Enum.BOOKING_STATUS;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values : [PENDING , CONFIRMED, INITIATED,CANCELLED, BOOKED],
        defaultValue : INITIATED,
        length: 10
      },
      noOfSeats: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue : 1
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('Bookings');
  }
};