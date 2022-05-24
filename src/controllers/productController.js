let db = require("../../database/models");

let productRouter = {
    list: function(req, res){
        db.Product.findAll()
        .then(function(product){
           // res.render("/products/listProducts", {product})
            res.send(product)
        }).catch(error=>{
            console.log(error);
        })
    }
}
 
module.exports = productRouter;     