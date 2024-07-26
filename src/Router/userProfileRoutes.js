const express=require('express');
const userProfile = require('../controller/ userProifleController');
const router=express.Router();

router.post('/userProfile',userProfile);



module.exports=router;