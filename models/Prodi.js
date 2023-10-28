const mongoose = require('mongoose');

const ProdiSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    fakultas:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fakultas"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Prodi', ProdiSchema)