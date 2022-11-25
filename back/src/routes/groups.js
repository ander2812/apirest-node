const { Router } = require('express');
const router = Router();
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []

router.get('/', cors(), async (req, res) => {
    const querySnapshot = await db.collection('groups').get()

    const groups = querySnapshot.docs.map(doc => ({
        id: doc.id,
        creationDate: doc.data().creationDate,
        description: doc.data().description,
        name: doc.data().name,
        schedule: doc.data().schedule,
    }))

    res.send(groups)

    console.log(groups)
})

module.exports = router;