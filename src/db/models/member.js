module.exports = (sequelize, DataTypes) => {
  return sequelize.define('member', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      age: {
        type: DataTypes.SMALLINT(6),
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      position: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      artist_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true
      },
    },
    {
      tableName: 'member'
    }
  )
};