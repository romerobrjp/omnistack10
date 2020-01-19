const { Router } = require('express');
const axios = require('axios');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Dev
routes.get('/', DevController.hello);
routes.get('/devs/:username', DevController.getOne);
routes.get('/devs', DevController.getAll);
routes.post('/devs', DevController.create);
routes.delete('/devs', DevController.delete);

// Search
routes.get('/search', SearchController.index);

module.exports = routes;