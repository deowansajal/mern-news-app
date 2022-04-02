const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ReplySchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true,
        },

        tutorial: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Tutorial',
        },

        comment: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Comment',
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    { timestamps: true }
)

ReplySchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Reply', ReplySchema)
