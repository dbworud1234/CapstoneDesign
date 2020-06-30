module.exports = (sequelize, DataTypes) => {
  return sequelize.define('board', {
    id : {
      type : DataTypes.INTEGER(11),
      allowNull : false,
      primaryKey : true,
      autoIncrement : true,
    },
    text : {
      type : DataTypes.STRING(140),
      allowNull : false,
    },
    img : {
      type : DataTypes.STRING(200),
      allowNull : false,
    },
    vid:{
      type : DataTypes.STRING(20),
    },
    userId : {
      type : DataTypes.STRING(30),
      allowNull : true,
    }
  }, {
    timestamps : true, // true -> createdAt, updatedAt column생성
  })
};
