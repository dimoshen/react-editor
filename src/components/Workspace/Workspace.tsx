import { FC } from 'react';
import './Workspace.scss';
import { Item } from '../Item/Item';
import { IconType } from '../Icon/Icon';

const workplaceItems: IconType[] = ['headline', 'paragraph', 'button', 'image'];

export const Workspace: FC = () => {
  return (
    <div className="Workspace">
      {workplaceItems.map(item => (
        <Item key={item} toolType={item} />
      ))}
    </div>
  );
};