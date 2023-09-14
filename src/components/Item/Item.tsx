import { FC } from 'react';
import './Item.scss';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/ToolType';

interface Props {
  toolType: ToolType;
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