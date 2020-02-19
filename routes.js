const express = require('express');
const donors = require('./controllers/donors');
const routes = express.Router();

routes.get('/',donors.get);
routes.post('/', donors.post);

module.exports = routes;