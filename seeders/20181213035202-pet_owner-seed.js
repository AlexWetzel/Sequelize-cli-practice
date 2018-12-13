'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Pet_owners', [
      {
        petId: 1,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        petId: 1,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        petId: 3,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        petId: 3,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Pet_owners', null, {});
  }
};
