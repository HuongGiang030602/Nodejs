const express = require('express');
const router = express.Router();
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

//Gọi đến controller
//Thong tin của 1 user: username, email, phone, age
router.post('/', userController.create )

router.get('/',userController.getAll)

router.put('/:id', userController.update )


router.delete('/:id',userController.delete)


module.exports = router;