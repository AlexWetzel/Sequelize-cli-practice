'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet_owner = sequelize.define('Pet_owner', {
    petId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {});
  Pet_owner.associate = function(models) {
    // associations can be defined here    
  };
  return Pet_owner;
};