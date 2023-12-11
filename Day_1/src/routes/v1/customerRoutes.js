const express = require('express');
const CustomerController = require('../../controllers/customerController')
const customerController = require('../../controllers/customerController');
const router = express.Router();

router.get('/get/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  res.status(200).json({msg: `Get ID ${id}` });
});

router.get('/test',customerController.get)

router.post('/',customerController.create)

router.put('/', customerController.update)

router.delete('/:username/:email/:address',customerController.delete)


module.exports = router;