import { FC } from 'react';
import './Workspace.scss';
import { Item } from '../WorkplaceItem/WorkplaceItem';

import { useAppSelector } from '../../redux/hooks/hooks';

export const Workspace: FC = () => {
  const { items } = useAppSelector(state => state.items)

  return (
    <div className="Workspace">
      {items.map(item => (
        <Item key={item} toolType={item} />
      ))}
    </div>
  );
};
