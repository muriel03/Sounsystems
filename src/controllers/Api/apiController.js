const db = require('../../../database/models');

const apiController = (req, res) => {
    let users = db.User.findAll();
    let products = db.Product.findAll();
    Promise.all([users, products])
        .then(([allUsers, allProducts])=> {
            res.send({allUsers, allProducts});
        })
}

module.exports = {apiController};