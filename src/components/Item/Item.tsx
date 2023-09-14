import { FC } from 'react';
import './Item.scss';
import { Icon } from '../Icon/Icon';
import { ItemType } from '../../types/ItemType';

interface Props {
  toolType: ItemType;
}

export const Item: FC<Props> = ({toolType}) => {
  return (
    <div className="Item">

      <Icon size={20} type={toolType} />

      <div className="Item__title">
        {toolType}
      </div>
    </div>
  );
};