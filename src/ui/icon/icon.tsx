import { type FC } from 'react';

import { CloseIcon } from './close-icon';
import { PlusIcon } from './plus-icon';
import { MinusIcon } from './minus-icon';
import { CartIcon } from './basket';
import { ArrowIcon } from './arrow';

export interface IIcon {
  type: 'close' | 'plus' | 'minus' | 'basket' | 'arrow';
  size?: number;
}

export const Icon: FC<IIcon> = ({ type, size = 12 }) => {
  switch (type) {
    case 'close':
      return <CloseIcon size={size} />;
    case 'plus':
      return <PlusIcon size={size} />;
    case 'minus':
      return <MinusIcon size={size} />;
    case 'basket':
      return <CartIcon size={size} />;
    case 'arrow':
      return <ArrowIcon size={size} />;
    default:
      return null;
  }
};
