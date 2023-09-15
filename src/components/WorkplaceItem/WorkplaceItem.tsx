import { FC, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/ToolType';
import { Toolbar } from '../Toolbar';

import './WorkplaceItem.scss';

interface Props {
  toolType: ToolType;
}

export const WorkplaceItem: FC<Props> = ({ toolType }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={classNames("WorkplaceItem", { 'active': isActive })} onClick={handleActivate}>
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
