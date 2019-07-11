const express = require('express');
const app = express();
const port = 3001;
const basePrefix = '/api/';

const friendlyUri = uri => basePrefix + uri;

const foos = [{ name: 'foo' }, { name: 'bar' }];

app.get('*', (req, res, next) => {
  console.log(req.path);
  next();
});

app.get(friendlyUri('foos'), (req, res) => res.send(foos));

app.listen(port, () => console.log(`Server running on :${port}!`));
