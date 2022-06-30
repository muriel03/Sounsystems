const path = require("path");
const { validationResult } = require("express-validator");
let db = require("../../database/models");

const controller = {
  index: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("index", { products });
    });
  },

  search: (req, res) => {
    res.render("result");
  },

  listProducts: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("./products/listProducts", { products });
    });
  },

  productDetail: (req, res) => {
    let idParam = Number(req.params.id);
    db.Product.findByPk(idParam).then(function (product) {
      res.render("./products/productDetail", { product });
    });
  },

  newProduct: (req, res) => {
    let category = db.Category.findAll();
    let brands = db.Brand.findAll();
    const productInit = {
      name: "",
      description: "",
      brandId: 3,
      price: "",
      discount: 0,
    };

    Promise.all([brands, category])
      .then(function ([brandList, categoryList]) {
        res.render("./products/newProduct", {
          brandList,
          categoryList,
          ...productInit,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  shoppingCart: (req, res) => {
    db.Product.findAll().then((products) => {
      res.render("./products/shoppingCart", { products });
    });
  },

  listHeadphones: (req, res) => {
    let headphones = [];
    db.Product.findAll().then((product) => {
      product.filter((a) => {
        if (a.category_id == 2) {
          headphones.push(a);
        }
      });
      res.render("./products/headPhones", { headphones });
    });
  },

  listSpeakers: (req, res) => {
    let speakers = [];
    db.Product.findAll().then((product) => {
      product.filter((a) => {
        if (a.category_id == 4) {
          speakers.push(a);
        }
      });
      console.log(speakers);
      res.render("./products/speakers", { speakers });
    });
  },

  createProduct: async (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      let categoryList = await db.Category.findAll();
      let brandList = await db.Brand.findAll();
      res.render("./products/newProduct", {
        categoryList,
        brandList,
        ...req.body,
        errors: { ...resultValidations.mapped() },
      });
      return;
    } else {
      await db.Product.create({
        ...req.body,
        img: req.file.filename,
      }).catch((error) => {
        console.log(error);
      });
      res.redirect("/listProductAdmin");
    }
  },

  editProduct: async (req, res) => {
    let idParam = Number(req.params.id);
    let products = db.Product.findByPk(idParam);
    let category = db.Category.findAll();
    let brands = db.Brand.findAll();

    const [productToEdit, categoryList, brandList] = await Promise.all([
      products,
      category,
      brands,
    ]);

    res.render("./products/editProduct", {
      productToEdit,
      categoryList,
      brandList,
    });
  },

  updateProduct: async (req, res) => {
    const resultValidations = validationResult(req);
    let idParam = Number(req.params.id);

    if (resultValidations.errors.length > 0) {
      let productToEdit = db.Product.findByPk(idParam);
      let categoryList = await db.Category.findAll();
      let brandList = await db.Brand.findAll();
      res.render("./products/editProduct", {
        productToEdit,
        categoryList,
        brandList,
        ...req.body,
        errors: { ...resultValidations.mapped() },
      });
      return;
    } else {
      await db.Product.update(
        {
          ...req.body,
          img: req.file.filename,
        },
        {
          where: {
            id: idParam,
          },
        }
      )
        .then(() => res.redirect("/listProductAdmin"))
        .catch((error) => {
          console.log(error);
        });
    }
  },
  deleteProduct: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/listProductAdmin");
    });
  },
  listProductsAdmin: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("./products/listProductAdmin", { products });
    });
  },
};

module.exports = controller;
