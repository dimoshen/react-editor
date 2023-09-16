import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { actions } from '../../redux/features/items';
import { v4 as uuidv4 } from 'uuid';

import { Icon } from '../Icon/Icon';

import './ToolsBoxItem.scss';

interface Props {
  toolType: string;
}

export const ToolsBoxItem: FC<Props> = ({toolType}) => {
  const dispatch = useAppDispatch();

  const handleAddNewItem = () => {
    const newItem = {
      id: uuidv4(),
      toolName: toolType,
      content:'',
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
