const express = require('express');
const server = express();
const routes = require('./routes');

server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');

const nunjucks = require('nunjucks');
nunjucks.configure('./',{
  express: server,
  noCache: true,
});

server.listen(5000, () => {
  console.log('Server running on port: 5000! Enjoy my Friend ;) ');
});