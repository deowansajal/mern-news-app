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

const createDiskStorage = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/uploads/images')
        },
        filename: function (req, file, cb) {
            cb(null, imageNameGenerator(file))
        },
    })

    return storage
}

const uploadField = () => {
    const upload = multer({
        storage: createDiskStorage(),
        fileFilter: function (req, file, cb) {
            cb(null, true)
        },
    })

    return upload
}

module.exports = uploadField
