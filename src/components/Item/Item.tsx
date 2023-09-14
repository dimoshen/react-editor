import { FC } from 'react';
import './Item.scss';
import { Icon, IconType } from '../Icon/Icon';

interface Props {
  toolType: IconType;
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