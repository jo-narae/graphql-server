module.exports = (sequelize, DataTypes) => {
  return sequelize.define('music', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      track: {
        type: DataTypes.SMALLINT(6),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      title: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      play_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      album_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true
      },
    },
    {
      tableName: 'music'
    }
  )
};