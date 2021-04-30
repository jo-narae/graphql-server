'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insert artist data
      await queryInterface.sequelize.query(`INSERT INTO album (name,release_date,artist_id,img) VALUES
      ("LOVE YOURSELF 承 'Her'",'2017-09-18',1,'https://w.namu.la/s/324e1fe054234a057621dfd9a26433fbf02d85a4e5db662da70eec22292cd56ae15b491fcee84a3d8b42d078550e585a367004723255b39e77d98230c68989b9438e1811c1157ffd23ce7a0bc94a513976e5ef9bd65ec0602d6c629f376dd47ca171a6d7380231922afe8aabc592f1a7'),
      ("LOVE YOURSELF 轉 'Tear'",'2018-05-18',1,'https://w.namu.la/s/04e966c3fd0a2c39fbf24d472fa3c62f6b6b5668018f305379b29fb9a0c6e0a49ca6bc13e98c035dcb80e3ca0a611036e67e9e21c767af25df2b010c7b78a0a1bfd2f7ad52f829c1cb6d867af2546307cf14d7ead7bf06cf5c64efa4e06d4e50'),
      ("MAP OF THE SOUL : PERSONA",'2019-04-12',1,'https://ww.namu.la/s/e5bc85edbf5567c5a573f154680c0b55652bf22d2d49d8304ec9a493cbbb2b7563db1f5c3c9c0410bea475c6eb06dbed49ae761b8ba5f63e4694232674f744336e432d951b72bf48008b2f4b1c84bac3886e6b44c980b83cfc92eb19692894f90d84a6fcbf38f2aea44b88a32a128672'),
      ("Dynamite",'2020-08-21',1,'https://w.namu.la/s/013e1c8e389fef56458c24922ba7c4fa3b888ec68b910a2d11d51fde073c0979fd0d5f5a49c10281721f2fde1ecbc4e406f50683b88c6a2b542eb4b1cd07b496dd27928b978df3fc1e1fa3b41f47d69d7e63d5049c08a6fdf96dca8ac7627edd388ff99d0eebea9458f237892547d43b');`);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
  }
};