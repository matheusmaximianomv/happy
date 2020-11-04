import { Router, Request, Response } from 'express';
import multer, { Multer } from 'multer';

import OrphanagesController from './app/controllers/OrphanagesController';

import multerConfig from './config/multer';

const routes: Router = Router();
const upload: Multer = multer(multerConfig);

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    name: 'Happy',
    version: '1.0.0',
    description:
      'Projeto desenvolvido na NLW#3 da Rocketseat e também utilizando outras bibliotecas',
  });
});

// Orphanages
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.store);

export default routes;
