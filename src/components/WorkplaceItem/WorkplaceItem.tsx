import { FC } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/ToolType';
import { Toolbar } from '../Toolbar';

import './WorkplaceItem.scss';

interface Props {
  toolType: ToolType;
  isActive: boolean;
  onActivate: () => void;
}

export const WorkplaceItem: FC<Props> = ({ toolType, isActive, onActivate }) => {
  return (
    <div
      className={classNames("WorkplaceItem", { 'active': isActive })}
      onClick={onActivate}
    >
      {isActive && (
        <Toolbar />
      )}
      <Icon size={20} type={toolType} />
      <div className="WorkplaceItem__title">
        {toolType}
      </div>
    </div>
  );
};
