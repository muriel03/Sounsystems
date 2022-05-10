function guesMiddleware(req, res, next) {
  if (req.session.userLogged) {
    res.redirect("profile");
  }
  next();
}
module.exports = guesMiddleware;
