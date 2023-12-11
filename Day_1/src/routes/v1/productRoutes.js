const express = require('express');
const ProducteController = require('../../controllers/productController');
const productController = require('../../controllers/productController');
const router = express.Router();

router.get('/get/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  res.status(200).json({msg: `Get ID ${id}` });
});

router.get('/test',productController.get)

router.post('/',productController.create)

router.put('/', productController.update)

router.delete('/:product_code/:product_name',productController.delete)


module.exports = router;