//4 schema fakultas
const mongoose= require('mongoose');

const FakultasSchema = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Fakultas',FakultasSchema)