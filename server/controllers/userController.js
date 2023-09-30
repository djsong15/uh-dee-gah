const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) return res.redirect('/signup/?Error=missing_info');
    User.create({ username, password })
        .then(newUser => {
            res.locals.userId = newUser.id;
            return next();
        })
        .catch(err => {
            return next(`create new User ERROR: ${err}`);
        });
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) return res.redirect('/login/?Error=missing_info');
    User.findOne({ username })
        .then(user => {
            if (!user) res.redirect('/signup');
            else {
                bcrypt.compare(password, user.password)
                    .then(pwMatch => {
                        if (!pwMatch) res.redirect('/signup');
                        else {
                            res.locals.userId = user.id;
                            return next();
                        }
                    });
            }
        })
        .catch(err => next(`Error in userController.verifyUser: ${JSON.stringify(err)}`));
};

userController.updateUserLocs = (req, res, next) => {
    // console.log(req.cookies.ssid);
    const { placesList } = req.body;
    console.log('the list: ', placesList);
    User.findOneAndUpdate({ _id: req.cookies.ssid }, { placesList }, {
        new: true
    })
        .then(user => console.log(user));
    return next();
};

userController.getUserLocs = (req, res, next) => {
    const { username } = req.params;
    console.log('username from params', username);
    User.findOne({ username })
        .then(user => {
            res.locals.user = user;
            console.log('found user: ', user);
            return next();
        })
        .catch(err => next(`Error in userController.getUserLocs: ${JSON.stringify(err)}`))
};

// userController.deleteLoc = (req, res, next) => {
//     const { locId } = req.body;
//     console.log('location to delete: ', locId);
//     User.findOne({ _id: req.cookies.ssid })
//         .then(user => {
//             console.log('found the list!', user.placesList);
//             return next();
//         })
//         .catch(err => next(`Error in userController.deleteLoc: ${JSON.stringify(err)}`));
// }

module.exports = userController;