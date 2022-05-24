const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/list", categoryController.list);

router.get("/detail/:id", categoryController.detail);
router.put("/edit/:id", categoryController.edit);

router.get("/add", categoryController.add);
router.post("/create", categoryController.create);

router.delete("/delete/:id", categoryController.delete); 




module.exports = router;