//rutas
const express = require("express");
const router = express.Router();

const path = require("path");
const multer = require("multer");

//middlewares
const guesMiddleware = require("../middlewares/guesMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const { body } = require("express-validator");

const validations = [
  body("fullName").notEmpty().withMessage("Debes de escribir tu nombre"),
  body("email")
    .notEmpty()
    .withMessage("Debes de ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debes de ingresar un formato de correo válido"), 
  body("password").notEmpty().withMessage("Tienes que ingresar una contreseña"),
  body("category").notEmpty().withMessage("Debes de elegir el tipo de cliente"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtension = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tines que elgir una imagen de perfil");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtension.includes(fileExtension)) {
        throw new Error(
          `Tu imagen debe de ser en formato ${acceptedExtension.join(", ")}`
        );
      }
    }
    return true;
  }),
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/avatar");
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

const usersController = require("../controllers/usersController");

//formulario de registro
router.get("/register", guesMiddleware, usersController.register);

//Procesar el registro
router.post(
  "/register",
  uploadFile.single("avatar"),
  validations,
  usersController.proccesRegister
);

//formulario de login
router.get("/login", guesMiddleware, usersController.login);

//procesar de login
router.post("/login", usersController.loginProcces);

//perfil de usuario
router.get("/profile", authMiddleware, usersController.profile);

//logout
router.get("/logout", usersController.logout); 

module.exports = router;
