const { response } = require('express')
const express = require('express')
const router  = express.Router()
const Admin = require('../models/Admin')
const User = require('../models/User')

// router.get('/', (req, res) => {
//     res.json({

//     })
// })
//CREATE
router.post('/', async (req, res)=> {
    const adminPost = new Admin({
        judul_artikel: req.body.judul_artikel,
        isi_artikel: req.body.isi_artikel
    })
console.log(req);
    try {
        const admin = await adminPost.save()
        res.json(admin)
    }catch(err){
    res.json({message: err})
    }
})


//READ
router.get('/', async (req, res)=> {
    try {
        const admin = await Admin.find()
        res.json(admin)
    }catch(err){
    res.json({message: err})
    }
})

//UPDATE
router.put('/:adminID', async (req, res)=> {
    try {
        const adminUpdate = await Admin.updateOne({_id: req.params.adminID}, {
            judul_artikel: req.body.judul_artikel,
            isi_artikel: req.body.isi_artikel
        })
        res.json(admin)
    }catch(err){
    res.json({message: err})
    }
})

//DELETE
router.delete('/:adminID', async (req, res)=> {
    try {
        const adminUpdate = await Admin.deleteOne({_id: req.params.adminID})
        res.json(admin)
    }catch(err){
    res.json({message: err})
    }
})


module.exports = router

//testinggg
