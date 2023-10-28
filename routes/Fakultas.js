// 5 buat route fakultas

const express = require('express')
const router = express.Router()
const Fakultas = require('../models/Fakultas')


// post fakultas
router.post('/', async(req, res) => {
    const dataFakultas = new Fakultas({
        nama: req.body.nama
    })
    try {
        const fakultas = await dataFakultas.save()
        res.json(fakultas)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        const fakultas = await Fakultas.find()
        res.json(fakultas)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router