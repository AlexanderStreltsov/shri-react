import { type ITicketCard } from '@/types/ticket-card';

export interface IMovie extends ITicketCard {
  releaseYear: number;
  description: string;
  rating: number;
  director: string;
  reviewIds: string[];
}
