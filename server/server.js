const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

app.use('/', express.static(path.join(__dirname, '../dist')));
// app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));

app.use('/', (req, res) => res.send('yo yo yo'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));