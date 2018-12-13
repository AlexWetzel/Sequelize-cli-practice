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
    return queryInterface.bulkInsert('Pets', [
      {
        name: 'Baseball',
        // Add dates manually in the seed, or else an error occurs
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Marley',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Elmo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Pets', null, {});
  }
};
