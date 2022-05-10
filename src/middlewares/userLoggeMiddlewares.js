const user = require("../models/User");

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  /*let emailInCookie = req.cookies.userEmail;
  let userFromCookie = user.findByField("email", emailInCookie);

  console.log(userFromCookie);

  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }*/ //userEmail

  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;
