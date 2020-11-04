import { Request, Response, Express } from 'express';
import { getRepository, Repository } from 'typeorm';
import * as Yup from 'yup';
import Orphanage from '../models/Orphanage';

import orphanagesView from '../views/Orphanages';

interface ITypeObjectImage {
  path: string;
}

class OrphanagesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const orphanagesRepository: Repository<Orphanage> = getRepository(
      Orphanage
    );

    const orphanages: Array<Orphanage> = await orphanagesRepository.find({
      relations: ['images'],
    });

    return res.status(200).json(orphanagesView.renderMany(orphanages));
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const orphanagesRepository: Repository<Orphanage> = getRepository(
      Orphanage
    );

    const orphanage: Orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return res.status(200).json(orphanagesView.render(orphanage));
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    let images: Array<ITypeObjectImage> = [];

    if (req.files) {
      const requestImages: Array<Express.Multer.File> = req.files as Array<
        Express.Multer.File
      >;

      images = requestImages.map((image) => {
        return { path: image.filename };
      });
    }

    const orphanagesRepository: Repository<Orphanage> = getRepository(
      Orphanage
    );

    const data: object = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema: Yup.ObjectSchema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage: Orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return res.status(201).json(orphanage);
  }
}

export default new OrphanagesController();
