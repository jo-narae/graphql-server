module.exports = (sequelize, DataTypes) => {
  return sequelize.define('agency', {
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
      ceo: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    },
    {
      tableName: 'agency'
    }
  )
};