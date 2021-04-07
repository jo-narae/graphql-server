'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//모델정보를 읽어온다.
db.Agency = require('./agency')(sequelize, Sequelize);
db.Artist = require('./artist')(sequelize, Sequelize);
db.Member = require('./member')(sequelize, Sequelize);
db.Album = require('./album')(sequelize, Sequelize);
db.Music = require('./music')(sequelize, Sequelize);

//모델간의 관계를 정의한다.
db.Agency.hasMany(db.Artist, { foreignKey: 'agency_id', sourceKey: 'id' });
db.Artist.belongsTo(db.Agency, { foreignKey: 'agency_id', targetKey: 'id' });

db.Artist.hasMany(db.Member, { foreignKey: 'artist_id', sourceKey: 'id' });
db.Member.belongsTo(db.Artist, { foreignKey: 'artist_id', targetKey: 'id' });

db.Artist.hasMany(db.Album, { foreignKey: 'artist_id', sourceKey: 'id' });
db.Album.belongsTo(db.Artist, { foreignKey: 'artist_id', targetKey: 'id' });

db.Album.hasMany(db.Music, { foreignKey: 'album_id', targetKey: 'id' });
db.Music.belongsTo(db.Album, { foreignKey: 'album_id', targetKey: 'id' });

module.exports = db;
