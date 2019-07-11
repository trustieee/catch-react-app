const express = require('express');
require('dotenv').config();

const id = process.env.MY_ENV_ID;
const key = process.env.MY_ENV_KEY;

const app = express();
const port = 3001;
const basePrefix = '/api/';

app._get = (uri, ...props) => {
  app.get(basePrefix + uri, props);
};

const foos = [{ name: 'foo' }, { name: 'bar' }];

app.get('*', (req, res, next) => {
  console.log(req.path);
  next();
});

app._get('foos', (req, res) => res.send(foos));
app._get('env', (req, res) => res.send({ id, key }));

app.listen(port, () => console.log(`Server running on :${port}!`));
