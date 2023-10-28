// 5 buat route fakultas

const express = require('express')
const router = express.Router()
const Dosen = require('../models/Dosen')


// post fakultas
router.post('/', async(req, res) => {
    const dataDosen = new Dosen({
        kode: req.body.kode,
        nama: req.body.nama,
        prodi: req.body.prodi
    })
    try {
        const dosen = await dataDosen.save()
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        
        const dosen = await Dosen.find().populate({
            path: 'prodi',
            select: '_id nama',
            populate:{
                path:'fakultas',
                select: '_id nama'
            }
        }).exec()
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router