const router = require('express').Router()
const planets = require('../schema/planet.schema')

router.get('/', async (req, res) => {
  try{
    const planet = await planets.find();
    res.json(planet)
  }
  catch (err) {
    res.json({ message:err})
  }
});

router.get('/:planetName', async (req, res) =>{
  try{
    const planetName = await planets.findOne( {name: req.params.planetName });
    res.json(planetName)
  }
  catch (err) {
    res.json({ message: err})
  }
})

router.post('/', async (req, res) => {
  const planet= new planets({
    name: req.body.name,
    number_of_moons: req.body.number_of_moons,
    mass: req.body.mass
  });

  try {
    const savedPlanet = await planet.save()
      res.json(savedPlanet)
    }
    catch(err){
      res.json({ message: err})
    }
});

router.delete('/:ID', async (req, res) => {
  try{
    const removedPlanet = await planets.remove({_id: req.params.ID})
    res.json(removedPlanet)
  }
  catch (err) {
    res.json({ message: err})
  }
})

module.exports = router;
