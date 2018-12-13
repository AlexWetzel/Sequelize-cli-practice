'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    Name: DataTypes.STRING
  }, {});
  Owner.associate = function(models) {
    // associations can be defined here
    Owner.belongsToMany(models.Pet, { through: 'pet_owners', as: 'ownedPets'})
  };
  return Owner;
};