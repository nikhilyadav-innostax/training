const { query } = require('express');
const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'students',
    password:'password',
    port: 8008
});

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to the database');
    release();
  });

module.exports = {
    query: (text, params) => pool.query(text, params),
};
