const express = require('express');
const router = express.Router();
const {studentcreate}=require('../controller/studentcontroller')
const {result ,get , query} = require('../controller/resultcontroller')

router.post('/studenttt',studentcreate)
router.post('/result',result)
router.get('/students/:studentid/result',get)
router.get('/students',query)



module.exports = router;