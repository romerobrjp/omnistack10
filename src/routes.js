const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.get('/', (req, res) => {
  console.log(req.body);
  return res.json({message: 'Hello Omnistack 10!'});
});

routes.get('/devs/:username', async (req, res) => {
  const githubUsername = req.params.username;
  const githubResponse = await axios.get(`https://api.github.com/users/${githubUsername}`);
  return res.json(githubResponse.data);
});

module.exports = routes;