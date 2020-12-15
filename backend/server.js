require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbSeeder = require('./seeder/dbSeeder');
const routes = require('./routes/index.js');

const app = express();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbSeeder();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server connected on port ${port}`));
