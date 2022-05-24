const path = require('path');
const fs = require('fs');//no

//no
const productsFilePath = path.join(__dirname, '../data/products/products.json');

const controller = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('index', {products})
    },
    search: (req, res) => {
        res.render('result')
    },
    shoppingCart: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/shoppingCart', { products })
    },
    login: (req, res) => res.render('./user/login'),
    register: (req, res) => res.render('./user/register'),
    productDetail: (req, res) => res.render('./products/productDetail'),
    newProduct: (req, res) => res.render('./products/newProduct'),
    createProduct: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let newProduct = {
            id: Date.now(),
            name: req.body.productName,
            description: req.body.description,
            img: req.file.filename,
            category: req.body.category,
            price: req.body.productPrice,
            discount: req.body.discount
        };
        products.unshift(newProduct);
        let producsJSON = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, producsJSON)
        res.redirect('/')
    },
    editProduct: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let idParam = Number(req.params.id);
        let productToEdit = products.find(i => i.id === idParam);
        res.render('./products/editProduct', { productToEdit });
    },
    updateProduct: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let idParam = Number(req.params.id);
        let productToEdit = products.find(i => i.id === idParam);
        productToEdit.name = req.body.productName;
        productToEdit.description = req.body.description;
        productToEdit.category = req.body.category;
        productToEdit.price = req.body.productPrice;
        productToEdit.discount = req.body.discount;
        if (req.file) {
            productToEdit.img = req.file.filename;
        }
        let producsJSON = JSON.stringify(products, null, 2)
        fs.writeFileSync(productsFilePath, producsJSON)
        res.redirect("/")
    },
    search: (req, res) => {
        res.render('update')
    }
}

module.exports = controller;