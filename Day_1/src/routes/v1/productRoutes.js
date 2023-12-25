const express = require('express');
const productController = require('../../controllers/productController');
const verifyToken = require('../../middlewares/VerifyToken.js')

const router = express.Router();

// router.get('/get/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id)
//   res.status(200).json({msg: `Get ID ${id}` });
// });

const Joi = require('joi');

const userValidationSchema = Joi.object({
  Product_name: Joi.string().alphanum().required().messages({
    'any.required': `"Product_name" không được bỏ trống !`
  }),
  manufacturer: Joi.string().required(),
  age: Joi.number().min(18).required(),
  year_of_manufacture: Joi.string().required(), 
  quantity: Joi.number().required(),
  price: Joi.number().required()

});

// Middleware kiểm tra và xác thực dữ liệu
const validateProductData = (req, res, next) => {
    const { error, value } = userValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

router.post('/',validateProductData,verifyToken,productController.create )

router.get('/',productController.getAll)

router.put('/:id', productController.update )


router.delete('/:id',productController.delete)


module.exports = router;