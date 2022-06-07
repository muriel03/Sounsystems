const { body } = require('express-validator');
const path = require('path')

const validations = [
    body('name').notEmpty().withMessage('Debe ingresar el nombre del producto'),
    body('description').notEmpty().withMessage('Debe ingresar una descripcion del producto con minimo 20 caracteres'),
    body('price').notEmpty().withMessage('Ingresa el precio del producto'),
    body('img').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtension = [".jpg", ".png", ".gif"];
    
        if (!file) {
          throw new Error("Tines que elgir una imagen del producto");
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtension.includes(fileExtension)) {
            throw new Error(
              `Tu imagen debe de ser en formato ${acceptedExtension.join(", ")}`
            );
          }
        }
        return true;
      })
]

module.exports = validations