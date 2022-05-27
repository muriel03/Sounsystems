const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

const User = require("../models/User");

const controller = {
  register: (req, res) => {
    db.TypeUser.findAll().then((category) => {
      res.render("./user/register", { category });
    });
  },
  proccesRegister: async (req, res) => {
    const resultValidation = validationResult(req);
    let category = await db.TypeUser.findAll().catch((error) =>
      console.log(error)
    );

    if (resultValidation.errors.length > 0) {
      res.render("./user/register", {
        category,
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      let rtaUser = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      }).catch((error) => console.log(error));
      if (rtaUser) {
        res.render("./user/register", {
          category,
          errors: {
            email: {
              msg: "Este email ya se encuentra registrado",
            },
          },
          oldData: req.body,
        });
      } else {
        await db.User.create({
          ...req.body,
          password: bcryptjs.hashSync(req.body.password, 10),
          avatar: req.file.filename,
        }).catch((error) => console.log(error));
        res.redirect("/users/login");
      }
    }
  },
  login: (req, res) => {
    res.render("./user/login");
  },
  loginProcces: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userToLogin) => {
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
    });
  },
  profile: (req, res) => {
    console.log(req.cookies.userEmail); //userEmail
    return res.render("./user/userProfile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    console.log(req.session);
    return res.redirect("/");
  },
  detail: (req, res) => {
    db.User.findByPk(req.params.id)
      .then(function (usersToEdit) {
        console.log();
        return res.render("./user/update", { usersToEdit });
      })
      .catch((err) => {
        return res.send("hola mundo");
      });
  },
  edit: (req, res) => {
    db.User.update(
      {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        //avatar: req.file.filename,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => {
      res.redirect("/users/profile");
    });
    req.session.userLogged = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.session.userLogged.avatar,
    };
  },
};

module.exports = controller;
