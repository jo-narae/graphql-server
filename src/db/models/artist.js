module.exports = (sequelize, DataTypes) => {
  return sequelize.define('artist', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      debut_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      agency_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false
      },
    },
    {
      tableName: 'artist'
    }
  )
};