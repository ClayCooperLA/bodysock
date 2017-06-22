var bodymovin = {};

if (typeof window !== 'undefined') {
    bodymovin = require('./bodymovin/bodymovin');
}

module.exports = bodymovin;
