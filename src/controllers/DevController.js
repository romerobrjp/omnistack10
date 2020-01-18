const axios = require('axios'); // axios lib allows to make API calls
const Dev = require('../models/Dev');

module.exports = {
  hello(req, res) {
    console.log(req.body);
    return res.json({message: 'Hello Omnistack 10!'});
  },

  async getDev(req, res) {
    const githubUsername = req.params.username;
    const githubResponse = await axios.get(`https://api.github.com/users/${githubUsername}`);
    return res.json(githubResponse.data);
  },

  async store(req, res) {
    console.log(req.body);
    const {
      github_username,
      techs,
      latitude,
      longitude
    } = req.body;

    const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = githubResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    console.log(dev);

    return res.json(dev);
  }
}