const { body } = require("express-validator");
let db = require("../../database/models");

let categoryRouter = {
    list: function(req, res){
        db.Category.findAll()
        .then(function(category){
            //res.send("entró")
            res.render("category/listcategory",{category})
        })
        .catch(error=>{
            return res.send(error)
        }); 
    },
    detail: function(req, res){
        db.Category.findByPk(req.params.id)
        .then(function(category){
            res.render("category/detailCategory",
            {category})
        })
        .catch(error=>{
            return res.send(error)
        });
    },
    edit:function(req, res){
        db.Category.update({
          name: req.body.name
        },{
          where:{
            id: req.params.id
          }      
        })
        .then(()=>
            res.redirect('/category/list')
        )
        .catch(err => {
          return res.send(err)
       }); 
      },
      add: function(req, res){
          res.render("category/addcategory")
      },
      create: function(req, res){
          db.Category.create({
              name: req.body.name
          }).then(()=>res.redirect("/category/list"))
          .catch(err => {
            return res.send(err)
         });
      },
      delete:function(req, res){
          db.Category.destroy({
              where: {
                  id: req.params.id
              }
          })
          .then(()=>res.redirect('/category/list'))
          .catch(err => {
            return res.send(err)
        }); 
      }
}


module.exports = categoryRouter;