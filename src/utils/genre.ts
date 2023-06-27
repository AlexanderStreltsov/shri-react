import { TGenre } from '@/types/genre';

export const genreMap: Record<TGenre, string> = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия',
};

export const getRusGenre = (genre: TGenre) => {
  return genreMap[genre] || '';
};
