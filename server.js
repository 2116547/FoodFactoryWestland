const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const compression = require('compression')

const app = express();

app.use(compression());
app.use(cors)




app.use(express.static(path.join(__dirname, 'dist/FoodFactoryWestland')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/FoodFactoryWestland/index.html'));
});

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));