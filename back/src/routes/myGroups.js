const { Router } = require('express');
const router = Router();
const {id} = require('./auth')
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []

router.get('/', cors(), async (req, res) => {
    const querySnapshot = await db.collection('users').doc('OVeaMX4KTFd72QH11cSafe0xxs52').collection('group').get()

    const myGroups = querySnapshot.docs.map(doc => ({
        id: doc.id,
        creationDate: doc.data().creationDate,
        description: doc.data().description,
        name: doc.data().name,
        schedule: doc.data().schedule,
    }))

    res.send(myGroups)

    console.log("este es el id: " + id)

    console.log(myGroups)
})

module.exports = router;