const db = require('./models');

db.Pet.findAll({
  include: [{
    model: db.Owner,
    as: 'ownedBy',
    through: {
      attributes: []
    }
  }]
}).then( data => {
  console.log(data[0]);
}).catch( err => {console.log(err);})