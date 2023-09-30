const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
    Session.findOneAndUpdate({ cookieId: res.locals.userId })
        .then(() => next())
        .catch(err => next(`sessionController.startSession ERROR: ${err}`));
};

sessionController.endSession = (req, res, next) => {
    Session.findOneAndDelete({ cookieId: res.locals.userId })
        .then(() => next())
        .catch(err => next(`sessionController.endSession ERROR: ${err}`));
}

sessionController.isLoggedIn = (req, res, next) => {
    console.log('hello');
    Session.findOne({ cookieId: req.cookies.ssid })
        .then(sesh => {
            if (!sesh) {
                console.log('Don\'t forget to log in!');
                return res.redirect('/login');
              }
              res.locals.loggedIn = true;
              console.log('you\'re signed in!');
              return next();
        })
        .catch(err => next(`sessionController.isLoggedIn ERROR : ${err}`));
  };

module.exports = sessionController;