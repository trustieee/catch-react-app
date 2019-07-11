const express = require('express');
const app = express();
const port = 3001;

const foos = [{ name: 'foo' }, { name: 'bar' }];

app.get('/api/foos', (req, res) => res.send(foos));

app.listen(port, () => console.log(`Server running on :${port}!`));
