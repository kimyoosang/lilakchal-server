'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT id FROM Users;');
    const items = await queryInterface.sequelize.query('SELECT id FROM Items;');

    await queryInterface.bulkInsert('Seller_items', [
      {
        userId: users[0][0].id,
        itemId: items[0][0].id,
      },
      {
        userId: users[0][0].id,
        itemId: items[0][1].id,
      },
      {
        userId: users[0][0].id,
        itemId: items[0][2].id,
      },
      {
        userId: users[0][0].id,
        itemId: items[0][3].id,
      },
      {
        userId: users[0][0].id,
        itemId: items[0][4].id,
      },
      {
        userId: users[0][1].id,
        itemId: items[0][5].id,
      },
      {
        userId: users[0][1].id,
        itemId: items[0][6].id,
      },
      {
        userId: users[0][1].id,
        itemId: items[0][7].id,
      },
      {
        userId: users[0][1].id,
        itemId: items[0][8].id,
      },
      {
        userId: users[0][1].id,
        itemId: items[0][9].id,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Seller_items', null, {});
  }
};
