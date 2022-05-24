let db = require("../../database/models");

let brandRouter = {
    list: function(req, res){
        db.Brand.findAll()
        .then(function(brand){
            //res.send(brand)
            res.render("brands/listBrands",{brand}); 
            //console.log(brand)       
        })
        .catch(err => { 
            console.log(err)
         }); 
    },
    detail: function (req, res) {
      db.Brand.findByPk(req.params.id)
        .then(function (brand) {
          // res.send("entró");
          res.render("brands/detailBrand", {brand});
        })
        .catch(err => {
          return res.send(err)
       }); 
    },
    edit: function(req, res){
        db.Brand.update({
          name: req.body.name
        },{
          where:{
            id: req.params.id
           }
        })
        .then(()=>res.redirect("/brands/list")) 
        .catch(error=>{
          return res.send(error)
        });
    },
    add:function(req, res){
        res.render("brands/addBrands")
    },
    create: function(req, res){
        db.Brand.create({
            name:req.body.name
        }).then(()=>res.redirect("/brands/list"))
    },
    delete: function(req, res){  
        db.Brand.destroy({
         where: {
           id: req.params.id
         }
       })
       .then(()=>res.redirect('/brands/list'))
       .catch(err => {
           return res.send(err)
        }); 
       }
}

module.exports = brandRouter;