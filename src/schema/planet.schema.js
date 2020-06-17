const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number_of_moons: Number,
  mass: String
});

module.exports = mongoose.model("Planets", PlanetSchema);
