const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const brandsController = require("../controllers/brandController");

router.get("/list", brandsController.list);

router.get("/detail/:id",brandsController.detail);
router.put("/edit/:id", brandsController.edit);
//router.put("/edit/:id", typeUserController.edit);

router.get("/add", brandsController.add); 
router.post("/create", brandsController.create); 

router.delete("/delete/:id", brandsController.delete);


module.exports = router; 