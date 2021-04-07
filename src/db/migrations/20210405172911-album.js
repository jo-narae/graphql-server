'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insert artist data
      await queryInterface.sequelize.query(`INSERT INTO album (name,release_date,artist_id) VALUES
      ("LOVE YOURSELF 承 'Her'",'2017-09-18',1),
      ("LOVE YOURSELF 轉 'Tear'",'2018-05-18',1),
      ("MAP OF THE SOUL : PERSONA",'2019-04-12',1),
      ("Dynamite",'2020-08-21',1);`);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
  }
};