module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    number : {
      type : DataTypes.INTEGER(11),
      allowNull : false,
      primaryKey : true,
      autoIncrement : true,
    },
    realname : {
      type : DataTypes.STRING(40),
      allowNull : false,
    },
    nickname : {
      type : DataTypes.STRING(40),
      allowNull : false,
    },
    id : {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: true,
    },
    password : {
      type: DataTypes.STRING(100),
      allowNull : true,
    },
    provider: {
      type : DataTypes.STRING(10),
      allowNull : false,
      defaultValue : 'local',
    }
  }, {
    timestamps : true, // true -> createdAt, updatedAt column생성
  })
};
