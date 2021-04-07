'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insert artist data
      await queryInterface.sequelize.query(`INSERT INTO artist (name,debut_date,agency_id) VALUES
      ('BTS','2013-06-13',1),
      ('Tomorrow x Together','2019-03-04',1),
      ('BoA','2000-08-25',2),
      ('TVXQ','2003-12-26',2),
      ('Super Junior','2005-11-06',2),
      ('Girls Generation','2007-08-05',2),
      ('SHINee','2008-05-25',2),
      ('EXO','2012-04-08',2),
      ('Red Velvet','2014-08-01',2),
      ('J.Y. Park','1994-09-01',3),
      ('2PM','2008-09-04',3),
      ('DAY6','2015-09-07',3),
      ('TWICE','2015-10-20',3),
      ('Stray Kids','2018-03-25',3),
      ('ITZY','2019-02-12',3),
      ('BIGBANG','2006-08-19',4),
      ('WINNER','2014-08-17',4),
      ('iKON','2015-09-15',4),
      ('BLACKPINK','2016-08-08',4);`);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
  }
};