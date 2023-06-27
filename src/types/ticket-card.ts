import { TGenre } from './genre';

export interface ITicketCard {
  id: string;
  title: string;
  genre: TGenre;
  posterUrl: string;
  isDelete?: boolean;
}
