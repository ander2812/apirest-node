const { Router } = require('express');
const router = Router();
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []

router.options('/', cors())

router.post('/', async (req, res) => {
    const {id} = req.body

    console.log("este es el id: " + id)

    res.send("id añadido")
    
})

module.exports = router;
