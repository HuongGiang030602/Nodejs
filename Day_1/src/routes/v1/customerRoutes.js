const express = require('express');
const customerController = require('../../controllers/customerController');
const router = express.Router();

// router.get('/get/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id)
//   res.status(200).json({msg: `Get ID ${id}` });
// });

router.post('/', customerController.create )

router.get('/',customerController.getAll)

router.put('/:id', customerController.update )


router.delete('/:id',customerController.delete)

module.exports = router;