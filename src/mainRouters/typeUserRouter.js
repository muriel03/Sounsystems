const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const typeUserController = require("../controllers/typeUserController");

router.get("/list", typeUserController.list);

router.get("/detail/:id", typeUserController.detail);
router.put("/edit/:id", typeUserController.edit);

router.get("/add", typeUserController.add);
router.post("/create", typeUserController.create);
 
router.delete("/delete/:id", typeUserController.delete); 

  





module.exports = router;
