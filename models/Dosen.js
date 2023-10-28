// 4 schema fakultas
const mongoose = require('mongoose')
const DosenSchema = mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    prodi:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prodi"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dosen', DosenSchema)