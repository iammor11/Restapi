const mongoose = require('mongoose')

const FullnameSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required']
    },
    checked: {
        type: Boolean,
        default: false
    }
})

const Fullname = mongoose.model('fullname', FullnameSchema)
module.exports = Fullname