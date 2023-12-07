const express = require('express');
const router = express.Router();

router.get('/get/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  res.status(200).json({msg: `Get ID ${id}` });
});

router.get('/test', (req, res) => {
  const{username, email, address} = req.query;

  console.log(username, email, address);


  res.status(200).json({msg: `Username: ${username},email: ${email}, address: ${address}` });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const {username, email, address } = req.body;

  res.status(200).json({
    username,
    email, 
    address 
   });
});


router.put('/', (req, res) => {
  console.log(req.body);
  const {username, email, address} = req.body;

  res.status(200).json({
    username,
    email, 
    address 
   });
});

router.delete('/:username/:email/:address',(req,res) => {
  let username = req.params.username;
  let email = req.params.email;
  let address = req.params.address;
  console.log(username,email,address)

  res.status(200).json({msg: `Username: ${username},Mail: ${email}, Address: ${address}`});

});


module.exports = router;