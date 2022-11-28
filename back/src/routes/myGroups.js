const { Router } = require('express');
const router = Router();
const {id} = require('./auth')
const cors = require('cors')
const {db} = require('../firebase')
let schedule = []

let idUser = ""
let idGroup = ""

router.options('/', cors())

router.post('/', async (req, res) => {

    idUser = req.body.id
    console.log("este es el id actualizado en mygroups: " + req.body.id)

    res.send(req.body.id)
    
})

router.options('/idGroup', cors())

router.post('/idGroup', cors(), async (req, res) => {

    idGroup = req.body.id
    console.log("este es el id del group actualizado en mygroups: " + req.body.id)

    res.send(req.body.id)
    
})

router.delete('/', async (req, res) => {

    if (idGroup != null && idGroup != "") {
        if (idUser != null && idGroup != "") {

            await db.collection('users').doc(idUser).collection('group').doc(idGroup).delete()

            res.send(req.body.id)
            
        }
        
    }
    
})

router.get('/', cors(), async (req, res) => {

    if (idUser != null && idUser != "") {

        const querySnapshot = await db.collection('users').doc(idUser).collection('group').get()

        const myGroups = querySnapshot.docs.map(doc => ({
            id: doc.id,
            creationDate: doc.data().creationDate,
            description: doc.data().description,
            name: doc.data().name,
            schedule: doc.data().schedule,
        }))

    res.send(myGroups)
        
    }

    //console.log(myGroups)
})

module.exports = router;