const { body } = require("express-validator");
let db = require("../../database/models");

let typeUserRouter = {
  list: function (req, res) {
    db.TypeUser.findAll()
      .then(function (typeUser) {
      res.render("user/typeUser/listTypeUser", { typeUser });
    })
    .catch(err => { 
      console.log(err)  
   }); 
  }, 

  detail: function (req, res) {
    db.TypeUser.findByPk(req.params.id)
    .then(function (typeUser) {
      // res.send("entró");
      res.render("user/typeUser/detailtypeUser", {typeUser});
    })
    .catch(err => {
      return res.send(err)
   });
  },
  edit:function(req, res){ 
    db.TypeUser.update({
      name: req.body.name
    },{
      where:{
        id: req.params.id
      }      
    })
    .then(()=>res.redirect('/type/list'))
    .catch(err => {
      return res.send(err)
   }); 
  },
  add:function(req, res){
    res.render("user/typeUser/addtypeUser")   
  },
  create: function(req, res){
    db.TypeUser.create({
      name: req.body.name
    }).then(()=>res.redirect('/type/list'))
  },
  delete: function(req, res){  
   db.TypeUser.destroy({
    where: {
      id: req.params.id
    }
  }).then(()=>res.redirect('/type/list'))
  .catch(err => {
      return res.send(err)
   }); 
  }
  
};
module.exports = typeUserRouter;
