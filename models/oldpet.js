

module.exports = function(sequelize, DataTypes) {
  var nameofmodel = sequelize.define('nameofmodel', {

  });
  
  nameofmodel.associate = function (models) {
    // associations can be defined here
  };
  return nameofmodel;
};