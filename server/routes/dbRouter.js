const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

router.get('/:username',
    userController.getUserLocs,
    (req, res) => {
        console.log('db GET success');
        return res.status(200).json(res.locals.user);
    }
);

router.patch('/placesList', 
    userController.updateUserLocs,
    (req, res) => {
        console.log('db PATCH success');
        // console.log(req.body);
        res.end();
    }
);

module.exports = router;