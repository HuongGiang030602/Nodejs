const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/VerifyToken.js')
const userController = require('../../controllers/userController');

// router.get('/get/:id', (req, res) => {
//   let id = req.params;
//   console.log(id)
//   res.status(200).json({msg: `Get ID ${id}` });
// });

// router.get('/test', (req, res) => {
//   // console.log('a')
//   // let page = req.query.page;
//   // let sort = req.query.sort;
//   const{page, sort} = req.query;

//   console.log(page,sort);


//   res.status(200).json({msg: `Get query string` });
// });


const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
  }),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  phone: Joi.string().min(10).max(10).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateUserData = (req, res, next) => {
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

//Gọi đến controller
//Thong tin của 1 user: username, email, phone, age
router.post('/',validateUserData, verifyToken ,userController.create )

router.get('/',userController.getAll)

router.put('/:id', userController.update )

router.delete('/:id',userController.delete)



module.exports = router;