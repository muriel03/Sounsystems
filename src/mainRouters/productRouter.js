const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const productController = require("../controllers/productController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/product");
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName); 
    },
  });

  router.get("/", productController.list);

  const upload = multer({ storage });

module.exports = router;