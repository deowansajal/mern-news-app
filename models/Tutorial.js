const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TutorialSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
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
    { timestamps: true }
)

TutorialSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Tutorial', TutorialSchema)
