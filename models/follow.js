module.exports = (sequelize, DataTypes) => {
  return sequelize.define('follow', {
    er_id:{
      type : DataTypes.STRING(20),
      allowNull : false,
    },
    ee_id: {
      type : DataTypes.STRING(10),
      allowNull : false,
    }
})};
