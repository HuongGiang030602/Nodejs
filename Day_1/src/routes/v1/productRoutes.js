const express = require('express');
const productController = require('../../controllers/productController');
const router = express.Router();

// router.get('/get/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id)
//   res.status(200).json({msg: `Get ID ${id}` });
// });

router.post('/', productController.create )

router.get('/',productController.getAll)

router.put('/:id', productController.update )


router.delete('/:id',productController.delete)


module.exports = router;