const { Router } = require('express');
const router = Router();
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []

router.post('/', cors(), async (req, res) => {
    const {id} = req.body

    console.log(id)

    res.send("id añadido")
    
})

module.exports = router;
