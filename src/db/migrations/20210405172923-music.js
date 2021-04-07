'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Insert artist data
      await queryInterface.sequelize.query(`INSERT INTO music (track,name,title,play_time,album_id) VALUES
      (1,'Intro : Serendipity',0,'00:02:19',1),
      (2,'DNA',1,'00:03:43',1),
      (3,'Best Of Me',0,'00:03:47',1),
      (4,'보조개',0,'00:03:16',1),
      (5,'Pied Piper',0,'00:04:05',1),
      (6,'Skit : Billboard Music Awards Speech',0,'00:01:43',1),
      (7,'MIC Drop',0,'00:03:58',1),
      (8,'고민보다 Go',0,'00:03:55',1),
      (9,'Outro : Her',0,'00:03:49',1),
      (10,'Skit : 망설임과 두려움',0,'00:09:00',1),
      (11,'바다',0,'00:05:12',1),
      (1,'Intro : Singularity',0,'00:03:14',2),
      (2,'FAKE LOVE',1,'00:04:02',2),
      (3,'전하지 못한 진심 (feat. Steve Aoki)',0,'00:04:02',2),
      (4,'134340',0,'00:03:50',2),
      (5,'낙원',0,'00:03:30',2),
      (6,'Love Maze',0,'00:03:40',2),
      (7,'Magic Shop',0,'00:04:35',2),
      (8,'Airplane pt.2',0,'00:03:39',2),
      (9,'Anpanman',0,'00:03:53',2),
      (10,'So What',0,'00:04:42',2),
      (11,'Outro : Tear',0,'00:04:45',2),
      (1,'Intro : Persona',0,'00:02:54',3),
      (2,'작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)',1,'00:03:49',3),
      (3,'소우주(Mikrokosmos)',0,'00:03:46',3),
      (4,'Make It Right',0,'00:03:46',3),
      (5,'HOME',0,'00:03:54',3),
      (6,'Jamais Vu',0,'00:03:46',3),
      (7,'Dionysus',0,'00:04:08',3),
      (1,'Dynamite',1,'00:03:19',4),
      (2,'Dynamite (Instrumental)',0,'00:03:18',4),
      (3,'Dynamite (EDM Remix)',0,'00:03:18',4),
      (4,'Dynamite (Acoustic Remix)',0,'00:03:18',4),
      (5,'Dynamite (Tropical Remix)',0,'00:03:17',4),
      (6,'Dynamite (Poolside Remix)',0,'00:03:02',4),
      (7,'Dynamite (Slow Jam Remix)',0,'00:03:20',4),
      (8,'Dynamite (Bedroom Remix)',0,'00:03:27',4),
      (9,'Dynamite (Retro Remix)',0,'00:03:28',4),
      (10,'Dynamite (Midnight Remix)',0,'00:03:16',4);`);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
  }
};