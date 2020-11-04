import Image from '../../models/Image';

import IShowImages from './IShowImage';

class OrphanageView {
  public render(image: Image): IShowImages {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  }

  public renderMany(images: Array<Image>): Array<IShowImages> {
    return images.map((image) => this.render(image));
  }
}

export default new OrphanageView();
