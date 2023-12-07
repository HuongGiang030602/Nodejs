const express = require('express');
const router = express.Router();

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

router.post('/', (req, res) => {
  console.log(req.body);
  const {username, password} = req.body;

  res.status(200).json({
    username,
    password
   });
});


router.put('/', (req, res) => {
  console.log(req.body);
  const {username, password} = req.body;

  res.status(200).json({
    username,
    password
   });
});

router.delete('/:username/:password',(req,res) => {
  let username = req.params.username;
  let password = req.params.password;
  console.log(username,password)

  res.status(200).json({msg: `Username: ${username},Password: ${password}`});

});


module.exports = router;