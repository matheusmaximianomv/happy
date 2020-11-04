import Orphanage from '../../models/Orphanage';

import IShowOrphanage from './IShowOrphanage';

import imagesView from '../Images';

class OrphanageView {
  public render(orphanage: Orphanage): IShowOrphanage {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  }

  public renderMany(orphanages: Array<Orphanage>): Array<IShowOrphanage> {
    return orphanages.map((orphanage) => this.render(orphanage));
  }
}

export default new OrphanageView();
