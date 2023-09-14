import { FC, useEffect } from 'react';
import * as itemsApi from '../../api/items';
import './Toolbar.scss';
import { ToolbarItem } from '../ToolbarItem';

import { actions as itemsActions  } from '../../redux/features/items';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

export const Toolbar: FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.items)

  useEffect(() => {
    itemsApi.getAll()
      .then(itemsFromServer => {
        dispatch(itemsActions.set(itemsFromServer));
      });
  }, [dispatch])

  return (
    <div className="Toolbar">
      {items.map(item => (
        <ToolbarItem key={item} toolType={item} />
      ))}
    </div>
  );
};
