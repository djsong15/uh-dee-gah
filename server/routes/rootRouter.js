const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

router.get('/',
    // sessionController.isLoggedIn,
    (req, res) => {
        console.log('serve the app');
        return res.sendFile(path.resolve(__dirname, '../../dist'));
    }
);

router.get('/*',
    (req, res) => {
        console.log(res.locals);
        return res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
    }
);
router.post('/signup',
    userController.createUser,
    sessionController.startSession,
    cookieController.setSsidCookie,
    (req, res) => {
        // console.log(req.body);
        console.log('signup successful');
        res.redirect('/');
    }
);

router.post('/login',
    userController.verifyUser,
    sessionController.startSession,
    cookieController.setSsidCookie,
    (req, res) => {
        // console.log(res.locals);
        console.log('login successful');
        res.redirect('/');
    }
);

router.post('/logout',
    (req, res, next) => {
        res.locals.userId = res.cookie.ssid;
        next();
    },
    sessionController.endSession,
    cookieController.clearSsidCookie,
    (req, res) => {
        console.log('logout successful');
        return res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
    }
);

module.exports = router;