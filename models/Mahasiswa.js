// 4 schema fakultas
const mongoose = require('mongoose')
const MahasiswaSchema = mongoose.Schema({
    npm: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jk: {
        type: String,
        required: true
    },
    tanggal:{
        type: Date,
        required: true
    },
    prodi:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prodi"
    },
    dosenpa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dosen"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)