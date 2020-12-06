import path from 'path';
import multer from 'multer';
import { v4 as uuid } from 'uuid';

const storagePath = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: storagePath,
  storage: multer.diskStorage({
    destination: storagePath,
    filename(request, file, callback) {
      const fileHash = uuid();
      const fileExt = file.originalname.split('.').pop() as string;
      const fileName = `${fileHash}.${fileExt.toLowerCase()}`;

      return callback(null, fileName);
    },
  }),
};
