const Player = require('../models/playerSchema');

const dbSeeder = async () => {
  await Player.deleteMany();

  const array = [
    {
      slug: 'lebron-james',
      name: 'Lebron James',
      team: 'LAL',
      number: '23',
      position: 'F',
      height: '6-9',
      weight: '239 lbs',
      country: 'USA',
    },
    {
      slug: 'james-harden',
      name: 'James Harden',
      team: 'HOU',
      number: '23',
      position: 'F',
      height: '6-5',
      weight: '239 lbs',
      country: 'USA',
    },
    {
      slug: 'rajon-rondo',
      name: 'Rajon Rondo',
      team: 'HOU',
      number: '23',
      position: 'F',
      height: '6-5',
      weight: '239 lbs',
      country: 'USA',
    },
    {
      slug: 'anthony-davis',
      name: 'Anthony Davis',
      team: 'LAL',
      number: '23',
      position: 'F',
      height: '6-5',
      weight: '239 lbs',
      country: 'USA',
    },
    {
      slug: 'john-wall',
      name: 'John Wall',
      team: 'LAL',
      number: '23',
      position: 'F',
      height: '6-5',
      weight: '239 lbs',
      country: 'USA',
    },
  ];

  await Player.insertMany(array);
  };

module.exports = dbSeeder;
