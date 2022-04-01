const mongoose = require('mongoose')

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
                createdAt: new Date(),
            },
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
