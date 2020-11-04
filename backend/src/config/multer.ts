import multer from 'multer';
import { resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const fileName: string = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
};
