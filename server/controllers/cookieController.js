const cookieController = {};

cookieController.setSsidCookie = (req, res, next) => {
    try {
        res.cookie('ssid', res.locals.userId, { httpOnly: true });
        return next();
      }
      catch (err) {
        return next(`cookieController.setSSIDCookie ERROR: ${err}`);
      }
};

cookieController.clearSsidCookie = (req, res, next) => {
    try {
        res.cookie('ssid', res.locals.userId, {
            httpOnly: true,
            expires: new Date(Date.now() + 3 * 1000)
        });
        return next()
    }
    catch (err) {
        return next(`cookieController.clearSsidCookie ERROR: ${err}`);
    }
}

module.exports = cookieController;