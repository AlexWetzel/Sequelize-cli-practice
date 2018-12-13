'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pet_owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pets',
          key: 'id'
        },
        allowNull: false
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model:  'owners',
          key: 'id'
        },
        allowNull: false      
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pet_owners');
  }
};