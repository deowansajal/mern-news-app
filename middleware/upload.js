const path = require('path')
const multer = require('multer')
const DatauriParser = require('datauri/parser')

const parser = new DatauriParser()

const storage = multer.memoryStorage()
const uploadField = multer({ storage })

const dataUri = req => {
    return parser.format(
        path.extname(req.file.originalname).toString(),
        req.file.buffer
    )
}

module.exports = { uploadField, dataUri }
