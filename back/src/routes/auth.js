const { Router } = require('express');
const router = Router();
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []
var id = Math.random().toString(36).substr(2, 18)

let getId = "";

router.options('/', cors())

router.post('/', async (req, res) => {

    const {name, username, email} = req.body

    await db.collection('users').doc(id).set(req.body)
    
    res.send(req.body)

    console.log(name, username, email,)
})
 

module.exports = router
