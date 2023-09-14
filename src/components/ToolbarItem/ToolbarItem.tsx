import { FC } from 'react';
import './ToolbarItem.scss';
import { Icon } from '../Icon/Icon';
import { ItemType } from '../../types/ItemType';

interface Props {
  toolType: ItemType;
}

export const ToolbarItem: FC<Props> = ({toolType}) => {
  return (
    <div className="ToolbarItem">

      <Icon size={20} type={toolType} />

      <div className="ToolbarItem__title">
        {toolType}
      </div>
    </div>
  );
};