'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT id FROM Users;');
    const items = await queryInterface.sequelize.query('SELECT id FROM Items;');

    await queryInterface.bulkInsert('Buyer_items', [
      {
        userId: users[0][1].id,
        itemId: items[0][0].id,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Buyer_items', null, {});
  }
};
