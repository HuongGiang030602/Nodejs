const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');
const userController = require('../../controllers/userController');

router.get('/get/:id', (req, res) => {
  let id = req.params;
  console.log(id)
  res.status(200).json({msg: `Get ID ${id}` });
});

router.get('/test', (req, res) => {
  // console.log('a')
  // let page = req.query.page;
  // let sort = req.query.sort;
  const{page, sort} = req.query;

  console.log(page,sort);


  res.status(200).json({msg: `Get query string` });
});

//Gọi đến controller
router.post('/', userController.create )


router.put('/', userController.update )


router.delete('/:username/:password',userController.delete)


module.exports = router;