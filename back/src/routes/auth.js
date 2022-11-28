const { Router } = require('express');
const router = Router();
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []

let getId = "";
 

module.exports = router
