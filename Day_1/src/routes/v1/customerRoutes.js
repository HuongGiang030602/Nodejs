const express = require('express');
const customerController = require('../../controllers/customerController');
const verifyToken = require('../../middlewares/VerifyToken.js')
const router = express.Router();

// router.get('/get/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id)
//   res.status(200).json({msg: `Get ID ${id}` });
// });

const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
  }),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  phone: Joi.string().min(10).max(10).required(),
  address: Joi.string().required(), 
  gender: Joi.string().required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateCustomerData = (req, res, next) => {
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


router.post('/',validateCustomerData,verifyToken,customerController.create )

router.get('/',customerController.getAll)

router.put('/:id', customerController.update )


router.delete('/:id',customerController.delete)

module.exports = router;