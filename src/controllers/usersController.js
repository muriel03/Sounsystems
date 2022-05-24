const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models")


const User = require("../models/User");

const controller = {
  register: (req, res) => {
    db.TypeUser.findAll()
    .then((typeUser)=>{
     let nameTypeUser =[];
     typeUser.forEach(element=> {
       nameTypeUser.push(element.name);       
     });   
        return res.render("./user/register", {category:nameTypeUser});  
    })
        
    
  },
  proccesRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      db.TypeUser.findAll()
      .then((typeUser)=>{
       let nameTypeUser =[];
       typeUser.forEach(element=> {
         nameTypeUser.push(element.name);       
       });   
          return res.render("./user/register", {category:nameTypeUser,  errors: resultValidation.mapped(),
            oldData: req.body,});  
      })      
    }
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((rta)=>{
      console.log("rta", rta)
      if(rta){    
        db.TypeUser.findAll()
        .then((typeUser)=>{
         let nameTypeUser =[];
         typeUser.forEach(element=> {
           nameTypeUser.push(element.name);       
         });   
            return res.render("./user/register", {category:nameTypeUser,  errors: {
              email: {
                msg: "Este email ya se encuentra registrado",
              },
            },
            oldData: req.body, });  
        })   
       
      } 
      db.User.create({ 
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename,})
        return res.redirect("/users/login");
    });  
   
  },
  login: (req, res) => {
    return res.render("./user/login");
  },
  loginProcces: (req, res) => {
      db.User.findOne({
        where:{
          email: req.body.email
        }
      }).then((userToLogin)=>{
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
      })
   
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
  detail:(req, res)=>{    
    db.User.findByPk(req.params.id)
    .then(function(usersToEdit){
      console.log();
      return res.render("./user/update",{usersToEdit});
    })
    .catch(err=>{
            return res.send("hola mundo")
    });
  },
  edit:(req, res)=>{
    db.User.update({ 
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      //avatar: req.file.filename,
    },{
        where:{
          id: req.params.id
        }
      }
      )
      return res.redirect("/users/profile");
  }
};


module.exports = controller;
