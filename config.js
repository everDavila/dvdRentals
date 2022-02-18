

////variables de entorno
const env = process.env.NODE_ENV || 'development';

////env = 'development';
const knexfile = require('./knexfile');
const knex = require('knex');

////knexfile.js
module.exports = knex(knexfile[env]);