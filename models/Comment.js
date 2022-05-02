const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CommentSchema = new mongoose.Schema(
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

        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },

        replies: [
            {
                content: {
                    type: String,
                    required: true,
                    trim: true,
                },

                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'User',
                },
            },
            { timestamps: true },
        ],
    },
    { timestamps: true }
)

CommentSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Comment', CommentSchema)
