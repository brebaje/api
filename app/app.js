const express = require('express');

// middleware
const cors = require('cors');
const bodyParser = require('body-parser');

const logger = require('./utils/log');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

// listen for connections
app.listen(config.PORT, () => {
  logger.log(`Listening in http://localhost: ${config.PORT}`);
});

// for mocha tests purposes
module.exports = app;