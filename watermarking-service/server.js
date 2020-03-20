const express = require('express');
const config = require('./common/config')
const waterMarkRoutes = require('./main.routes')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to WaterMark Service Enginer !');
});
waterMarkRoutes.routeConfig(app);

app.listen(config.port, () => {
  console.log('Server listening on port %s...',config.port);
});

module.exports = app
