module.exports = (sequelize, DataTypes) => {
  return sequelize.define('album', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      artist_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true
      },
    },
    {
      tableName: 'album'
    }
  )
};