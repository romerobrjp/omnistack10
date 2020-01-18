const { Router } = require('express');
const axios = require('axios');
const DevController = require('./controllers/DevController')

const routes = Router();

routes.get('/', DevController.hello);

routes.get('/devs/:username', DevController.getDev);

routes.post('/devs', DevController.store);

module.exports = routes;