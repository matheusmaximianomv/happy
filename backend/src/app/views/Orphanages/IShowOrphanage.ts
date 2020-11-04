import IShowImage from '../Images/IShowImage';

export default interface IShowOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images?: Array<IShowImage>;
}