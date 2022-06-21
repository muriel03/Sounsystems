function userAdminMiddleware(req, res, next) {
    console.log("usuario logueado ",req.session.userLogged);
    if (req.session.userLogged.typeuser_id == 5) {
        res.redirect("/users/admin");
      } else {
         res.redirect("profile");
      }
      next();
}
module.exports = userAdminMiddleware;