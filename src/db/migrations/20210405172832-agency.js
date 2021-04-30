'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insert artist data
      await queryInterface.sequelize.query(`INSERT INTO agency (name,ceo,address,img) VALUES
      ('Big Hit','Bang Sihyuk','42, Teheran-ro 108-gil, Gangnam-gu, Seoul, Republic of Korea','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Big_Hit_Entertainment_Logo_black.svg/800px-Big_Hit_Entertainment_Logo_black.svg.png'),
      ('SM','Lee Sungsoo, Tak Youngjun','	648, Samseong-ro, Gangnam-gu, Seoul, Republic of Korea','https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/SM_Entertainment_Logo.svg/502px-SM_Entertainment_Logo.svg.png'),
      ('JYP','Jung Wook','205, Gangdong-daero, Gangdong-gu, Seoul, Republic of Korea','https://m.jype.com/images/logo.png'),
      ('YG','Hwangbo Kyung','3, Huiujeong-ro 1-gil, Mapo-gu, Seoul, Republic of Korea','https://upload.wikimedia.org/wikipedia/commons/0/0d/YG_Entertainment_Logo.svg');`);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
  }
};