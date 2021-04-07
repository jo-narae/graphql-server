'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

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
