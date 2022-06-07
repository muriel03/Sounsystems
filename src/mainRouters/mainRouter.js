const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const mainController = require("../controllers/mainController");
const validations = require('../middlewares/validations');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

router.get("/", mainController.index);
router.get("/search", mainController.search);
router.get('/listProducts', mainController.listProducts);

//Obtener el detalle de cada producto
router.get("/productDetail/:id", mainController.productDetail);

//Formulario para crear nuevo producto
router.get("/newProduct", mainController.newProduct);

//Procesar el registro del nuevo producto
router.post("/newProduct", upload.single("productImg"), validations ,mainController.createProduct);

//Formulario para editar el producto
router.get("/editProduct/:id", mainController.editProduct);

//Procesar la edicion del nuevo producto
router.put("/update/:id", upload.single("productImg"), validations ,mainController.updateProduct);

//Eliminar un producto
router.delete('/delete/:id', mainController.deleteProduct);

module.exports = router;
