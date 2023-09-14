import { FC } from 'react';
import './ToolbarItem.scss';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/ToolType';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { actions } from '../../redux/features/items';

interface Props {
  toolType: ToolType;
}

export const ToolbarItem: FC<Props> = ({toolType}) => {
  const dispatch = useAppDispatch();

  const handleAddNewItem = () => {
    dispatch(actions.add(toolType));
  }

  return (
    <div className="ToolbarItem" onClick={handleAddNewItem}>

      <Icon size={20} type={toolType} />

      <div className="ToolbarItem__title">
        {toolType}
      </div>
    </div>
  );
};
