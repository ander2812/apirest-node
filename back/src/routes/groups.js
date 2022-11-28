const { Router } = require('express');
const router = Router();
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []
var id = Math.random().toString(36).substr(2, 18)




router.get('/', cors(), async (req, res) => {
    const querySnapshot = await db.collection('groups').get()
    //console.log("este es el body " + req.body.id)
    const groups = querySnapshot.docs.map(doc => ({
        id: doc.id,
        creationDate: doc.data().creationDate,
        description: doc.data().description,
        name: doc.data().name,
        schedule: doc.data().schedule,
    }))
    
    res.send(groups)

    
})

router.options('/', cors())

router.post('/', async (req, res) => {

    const {name, username, email} = req.body

    await db.collection('users').doc(id).set(req.body)
    
    res.send(req.body)

    console.log(name, username, email,)
})

module.exports = router;