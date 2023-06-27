'use client';

import { useAppSelector as useSelector } from '@/redux/hooks';
import { selectFilteredTickets } from '@/redux/features/tickets/selector';
import { TicketsBlock } from '@/components/tickets-block/tickets-block';

export const FilteredTickets = () => {
  const filteredTickets = useSelector((state) => selectFilteredTickets(state));

  if (!filteredTickets.length) {
    return <div>Ничего не найдено =(</div>;
  }

  return <TicketsBlock tickets={filteredTickets} />;
};
