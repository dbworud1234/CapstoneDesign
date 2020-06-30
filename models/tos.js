module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tos', {
    vid:{
      type : DataTypes.STRING(20),
    },
    tag: {
      type : DataTypes.STRING(10),
      allowNull : false,
    },
    count: {
      type : DataTypes.INTEGER,
      defaultValue : 1
    }
  }, {
    timestamps : true, // true -> createdAt, updatedAt column생성
  })
};
