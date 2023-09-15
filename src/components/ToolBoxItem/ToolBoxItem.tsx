import { FC } from 'react';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/ToolType';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { actions } from '../../redux/features/items';

import './ToolBoxItem.scss';

interface Props {
  toolType: ToolType;
}

export const ToolBoxItem: FC<Props> = ({toolType}) => {
  const dispatch = useAppDispatch();

  const handleAddNewItem = () => {
    dispatch(actions.add(toolType));
  }

  return (
    <div className="ToolBoxItem" onClick={handleAddNewItem}>

      <Icon size={20} type={toolType} />

      <div className="ToolBoxItem__title">
        {toolType}
      </div>
    </div>
  );
};
