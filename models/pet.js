'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
    Pet.belongsToMany( models.Owner, { through: 'pet_owner', as: 'ownedBy'})
  };
  return Pet;
};