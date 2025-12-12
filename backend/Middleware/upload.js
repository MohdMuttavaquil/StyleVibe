import multer from "multer";

const stroage = multer.memoryStorage()

const uploder = multer({
    stroage,
    limits: {fileSize: 5 * 1024 * 1024}
})

export default uploder