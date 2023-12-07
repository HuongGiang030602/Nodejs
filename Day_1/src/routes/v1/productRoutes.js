const express = require('express');
const router = express.Router();

router.get('/get/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  res.status(200).json({msg: `Get ID ${id}` });
});

router.get('/test', (req, res) => {
 
  const{product_code, product_name} = req.query;

  console.log(product_code, product_name);


  res.status(200).json({msg: `MaSP: ${product_code},TenSP: ${product_name}` });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const {product_code, product_name} = req.body;

  res.status(200).json({
    product_code,
    product_name
   });
});


router.put('/', (req, res) => {
  console.log(req.body);
  const {product_code, product_name} = req.body;

  res.status(200).json({
    product_code,
    product_name
   });
});

router.delete('/:product_code/:product_name',(req,res) => {
  let product_code = req.params.product_code;
  let product_name = req.params.product_name;
  console.log(product_code,product_name)

  res.status(200).json({msg: `product_code: ${product_code},product_name: ${product_name}`});

});


module.exports = router;