const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const mainController = require("../controllers/mainController");

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
router.get("/shoppingCart", mainController.shoppingCart);
//router.get('/login', mainController.login);
//router.get('/register', mainController.register);
router.get("/productDetail", mainController.productDetail);
router.get("/newProduct", mainController.newProduct);
router.post(
  "/newProduct",
  upload.single("productImg"),
  mainController.createProduct
);
router.get("/editProduct/:id", mainController.editProduct);
router.put(
  "/update/:id",
  upload.single("productImg"),
  mainController.updateProduct
);

module.exports = router;
