import { FC } from 'react';
import './ToolbarItem.scss';
import { Icon, IconType } from '../Icon/Icon';

interface Props {
  toolType: IconType;
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