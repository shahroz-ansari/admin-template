var config = {
  '/auth/login': {
    method: 'post',
    status: 200,
    json: require('../data/auth/login/super.admin.json'),
    delay: 3000,
  },
};

module.exports = config;
