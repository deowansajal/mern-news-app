const path = require('path')
const multer = require('multer')

const imageNameGenerator = file => {
    return (
        path.basename(
            file.fieldname + '-' + file.originalname,
            path.extname(file.originalname)
        ) +
        '-' +
        Date.now() +
        path.extname(file.originalname)
    )
}

const createDiskStorage = destination => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/uploads' + destination)
        },
        filename: function (req, file, cb) {
            cb(null, imageNameGenerator(file))
        },
    })

    return storage
}

const uploadField = destination => {
    const upload = multer({
        storage: createDiskStorage(destination),
        fileFilter: function (req, file, cb) {
            cb(null, true)
        },
    })

    return upload
}

module.exports = uploadField
