const moongose = require('mongoose')

const NotesSchema = new Schema({
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

module.exports = moongose.model('notes', NotesSchema)