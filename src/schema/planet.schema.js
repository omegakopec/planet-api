const mongoose = require('mongoose');

//Testing this simple schema, will add more soon
const PlanetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number_of_moons: Number,
  mass: String
});

module.exports = mongoose.model("Planets", PlanetSchema);
