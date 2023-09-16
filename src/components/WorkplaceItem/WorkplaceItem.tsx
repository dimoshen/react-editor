import { FC, memo  } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/Item';
import { Toolbar } from '../Toolbar';

import './WorkplaceItem.scss';
import { TextForm } from '../TextForm';

interface Props {
  toolType: ToolType;
  isActive: boolean;
  onActivate: () => void;
  itemId: string;
}

export const WorkplaceItem: FC<Props> = memo(({
  toolType,
  isActive,
  onActivate,
  itemId
}) => {
  return (
    <div
      className={classNames("WorkplaceItem", { 'active': isActive })}
      onClick={onActivate}
    >
      <Icon size={20} type={toolType} />
      <div className="WorkplaceItem__title">
        {toolType}
      </div>
      {isActive && (
        <>
          <Toolbar itemId={itemId}/>
          {toolType !== 'image' && <TextForm itemId={itemId}/>}
        </>
      )}
    </div>
  );
});
