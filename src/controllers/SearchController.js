const Dev = require('../models/Dev');
const StringUtils = require('../utils/StringUtils');

module.exports = {
  async index(req, res) { // search all Devs in a 10km radius
    console.log(req.query);

    const {
      latitude,
      longitude,
      techs
    } = req.query;

    const techsArray = StringUtils.parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        }
      }
    });

    return res.json({ devs });
  }
}