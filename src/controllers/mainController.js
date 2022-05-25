const path = require('path');
const fs = require('fs');
let db = require("../../database/models");


//no
const productsFilePath = path.join(__dirname, '../data/products/products.json');

const controller = {
    index: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.render('index', {products})
        })
    },
    search: (req, res) => {
        res.render('result')
    },
    listProducts:(req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.render('./products/listProducts', {products})
        })
    },
    shoppingCart: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/shoppingCart', { products })
    },
    login: (req, res) => res.render('./user/login'),
    register: (req, res) => res.render('./user/register'),
    productDetail: (req, res) => {
        let idParam = Number(req.params.id);
        db.Product.findByPk(idParam)
            .then(function(product){
            res.render('./products/productDetail', {product})
        })
    },
    newProduct: (req, res) => {
        let category = db.CategoryProduct.findAll();
        let brands = db.Brand.findAll();

        Promise.all([brands, category])
        .then(function([brandList, categoryList]){
            res.render('./products/newProduct', {brandList, categoryList})
        }).catch(error => {
            console.log(error);
        })
    },

    createProduct: (req, res) => {
        db.Product.create({
            name: req.body.productName,
            description: req.body.description,
            img: req.file.filename,
            category: req.body.category,
            price: req.body.productPrice,
            discount: req.body.discount,
            categoryProduct_id: 1,
            brand_id: 1
        }).catch(error =>{
            console.log(error);
        });

        res.redirect('/')
    },
    editProduct: (req, res) => {
        let idParam = Number(req.params.id);
        let products = db.Product.findByPk(idParam)
        let category = db.CategoryProduct.findAll();
        let brands = db.Brand.findAll();

        Promise.all([products, category, brands]).then(function([productToEdit, categoryList, brandList]){
            res.render('./products/editProduct', { productToEdit, categoryList, brandList});
        })
    },
    updateProduct: (req, res) => {
        let idParam = Number(req.params.id);
        db.Product.update({
            name: req.body.productName,
            description: req.body.description,
            img: req.file.filename,
            category: req.body.category,
            price: req.body.productPrice,
            discount: req.body.discount,
            categoryProduct_id: req.body.category,
            brand_id: 1
        },{
            where: {
                id: idParam
            }
        }).then(()=>res.redirect("/"))
        .catch(error => {
            console.log(error)
        })
    },

    deleteProduct: (req, res) => {
        res.redirect('/');
    },

    search: (req, res) => {
        res.render('update')
    }
}

module.exports = controller;