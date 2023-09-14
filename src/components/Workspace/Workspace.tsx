import { FC } from 'react';
import './Workspace.scss';
import { Item } from '../Item/Item';
import { ItemType } from '../../types/ItemType';

const workplaceItems: ItemType[] = ['headline', 'paragraph', 'button', 'image'];

export const Workspace: FC = () => {
  return (
    <div className="Workspace">
      {workplaceItems.map(item => (
        <Item key={item} toolType={item} />
      ))}
    </div>
  );
};
