const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// app.use('/static', express.static('client'));
app.get('/', (req, res) => res.sendFile('../client/index.html'));

// catch-all requests to unknown routes
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {
            err: 'An error occurred'
        }
    };

    const errObj = Object.assign(defaultErr, err);
    console.log(errObj.log);

    return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;