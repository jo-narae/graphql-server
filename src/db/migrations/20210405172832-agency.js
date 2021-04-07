'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insert artist data
      await queryInterface.sequelize.query(`INSERT INTO agency (name,ceo,address) VALUES
      ('Big Hit','Bang Sihyuk','42, Teheran-ro 108-gil, Gangnam-gu, Seoul, Republic of Korea'),
      ('SM','Lee Sungsoo, Tak Youngjun','	648, Samseong-ro, Gangnam-gu, Seoul, Republic of Korea'),
      ('JYP','Jung Wook','205, Gangdong-daero, Gangdong-gu, Seoul, Republic of Korea'),
      ('YG','Hwangbo Kyung','3, Huiujeong-ro 1-gil, Mapo-gu, Seoul, Republic of Korea');`);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
  }
};