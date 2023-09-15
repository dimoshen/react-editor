import { FC } from 'react';
import { Icon } from '../Icon/Icon';
import { ToolType } from '../../types/ToolType';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../../redux/features/items';

import './ToolsBoxItem.scss';

interface Props {
  toolType: ToolType;
}

export const ToolsBoxItem: FC<Props> = ({toolType}) => {
  const dispatch = useAppDispatch();

  const handleAddNewItem = () => {
    const newItem = {
      id: uuidv4(),
      toolName: toolType,
    };
    dispatch(actions.add(newItem));
    console.log(newItem)
  }

  return (
    <div className="ToolsBoxItem" onClick={handleAddNewItem}>

      <Icon size={20} type={toolType} />

      <div className="ToolsBoxItem__title">
        {toolType}
      </div>
    </div>
  );
};
