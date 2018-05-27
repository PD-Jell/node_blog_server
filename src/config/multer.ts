import * as Multer from 'multer';
import * as Path from 'path';
import { archivePath, thumbnailPath } from './preset';

export const upload = Multer({
  storage: Multer.diskStorage({
    destination: (req, file, cb) => {
      if (Path.extname(file.originalname) === '.zip') {
        cb(null, archivePath);
      } else {
        cb(null, thumbnailPath);
      }
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + Path.extname(file.originalname));
    },
  }),
});
