const axios = require('axios'); // axios lib allows to make API calls
const Dev = require('../models/Dev');

module.exports = {
  hello(req, res) {
    return res.json({message: 'Hello Omnistack 10!'});
  },

  async getOne(req, res) {
    const githubResponse = await axios.get(`https://api.github.com/users/${req.params.username}`);
    return res.json(githubResponse.data);
  },

  async create(req, res) {
    const {
      github_username,
      techs,
      latitude,
      longitude
    } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  
      const { name = login, avatar_url, bio } = githubResponse.data;
  
      const techsArray = techs.split(',').map(tech => tech.trim());
  
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
  
      dev = await Dev.create({
        github_username: github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });

      return res.json(dev);
    } else {
      return res.json( { message: `Couldn\'t create: the dev ${dev.github_username} aleady exists.` });
    }
  }
}