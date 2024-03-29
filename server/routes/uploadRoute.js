import express from 'express';
import multer from 'multer'
import path from 'path';
import url from 'url';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const publicImagesPath = path.join(__dirname, '..', 'public/images');

        cb(null, publicImagesPath);
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });

uploadRouter.post("/", upload.single("file"), (req, res, next) => {
    try {
        return res.json("File uploaded successfully");
    } catch (error) {
        next(error);
    }
});

export default uploadRouter;
