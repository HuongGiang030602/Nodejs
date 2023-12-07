const express = require('express');
const router = express.Router();

const userRouter = require('./userRoutes');
const customerRoutes = require('./customerRoutes');
const productRoutes = require('./productRoutes');
// const router = require('./userRoutes');

router.get('/status',(req, res) => {
    res.status(200).json({ msg:'API are ready' })

})

router.use('/users',userRouter)
router.use('/product',productRoutes)
router.use('/customers',customerRoutes)

module.exports = router;