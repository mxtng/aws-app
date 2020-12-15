const express = require('express');
const router = express.Router();
const Player = require('../models/playerSchema');

router.get('/player/:slug', async (req, res) => {
  const slug = req.params.slug;

  const data = {
    slug: 'lebron-james',
    name: 'Lebron James',
    team: 'LAL',
    number: '23',
    position: 'F',
    height: '6-9',
    weight: '250 lbs',
    country: 'USA',
  };

  const player = await Player.find({ slug });

  res.send(player);
});

module.exports = router;
