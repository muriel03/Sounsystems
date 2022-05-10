const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/User");

const controller = {
  register: (req, res) => {
    return res.render("./user/register");
  },
  proccesRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("./user/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userInDb = User.findByField("email", req.body.email);
    if (userInDb) {
      return res.render("./user/register", {
        errors: {
          email: {
            msg: "Este email ya se encuentra registrado",
          },
        },
        oldData: req.body,
      });
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
    };
    let userCreate = User.create(userToCreate);

    return res.redirect("/users/login");
  },
  login: (req, res) => {
    return res.render("./user/login");
  },
  loginProcces: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
        }

        return res.redirect("profile");
      }
      return res.render("./user/login", {
        errors: {
          email: {
            msg: "Credenciales no son correctas ",
          },
        },
      });
    }
    return res.render("./user/login", {
      errors: {
        email: {
          msg: "Usuario no encontrado en la base de datos ",
        },
      },
    });
  },
  profile: (req, res) => {
    console.log(req.cookies.userEmail);//userEmail
    return res.render("./user/userProfile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    console.log(req.session);
    return res.redirect("/");
  },
};

module.exports = controller;
