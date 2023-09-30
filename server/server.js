const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const sessionController = require('./controllers/sessionController');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'udg-users'
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const rootRouter = require('./routes/rootRouter');
const dbRouter = require('./routes/dbRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use('/', express.static(path.join(__dirname, '../dist')));

app.use('/db', dbRouter);
app.use('/', rootRouter);

// app.get('/',
//     // sessionController.isLoggedIn,
//     (req, res) => {
//         return res.sendFile(path.resolve(__dirname, '../dist/index.html'));
//     }
// );

app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;