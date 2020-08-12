const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number_of_moons: Number,
  mass: String,
  density: String,
  star_name: String,
  average_distance: String,
  perihelion: String,
  aphelion: String,
  average_temperature: Number,
  temperature_high: Number,
  temperature_low: Number,
});

module.exports = mongoose.model("Planets", PlanetSchema);
