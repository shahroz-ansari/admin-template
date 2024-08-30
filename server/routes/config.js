var config = {
  '/auth/login': {
    method: 'post',
    status: 200,
    json: require('../data/auth/login/super.admin.json'),
    delay: 3000,
  },
  '/products': {
    method: 'get',
    status: 200,
    json: require('../data/products/1-10.json'),
    delay: 1000,
  },
};

module.exports = config;
