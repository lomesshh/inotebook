const moongose = require('mongoose')
const {Schema} = mongoose


const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: Date.now
    }
})

module.exports = moongose.model('Note', NoteSchema)