/* eslint-disable prefer-const */
/* eslint-disable eol-last */

const cities = require('../data/cities');

// Auto complete
exports.auto_complete = (req, res) => {
  let { q, longitude, latitude } = req.query;
  longitude = (!longitude) ? '' : longitude;
  latitude = (!latitude) ? '' : latitude;
  if (!q) {
    return res.status(400).json({ status: 400, error: 'Invalid request, please pass a parameter' });
  }
  const result = cities.filter((item) => item.city.includes(`${q}`) || item.latitude === latitude || item.longitude === longitude);
  if (result.length > 0) {
    return res.status(200).json({
      status: 200,
      suggestions: {
        name: result.city,
        latitude: result.latitude,
        longitude: result.longitude,
        score: result.rank,
      },
    });
  }
  return res.status(404).json({
    status: 404,
    message: 'No match',
    suggestions: result,
  });
};