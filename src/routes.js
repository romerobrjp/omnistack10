const { Router } = require('express');
const axios = require('axios');
const DevController = require('./controllers/DevController')

const routes = Router();

routes.get('/', DevController.hello);

routes.get('/devs/:username', DevController.getOne);

routes.post('/devs', DevController.create);

module.exports = routes;