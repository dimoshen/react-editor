import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { useAppSelector } from '../../redux/hooks/hooks';
import { actions } from '../../redux/features/items';
import './Toolbar.scss';

interface Props {
  itemId: string;
}

import remove from '../../assets/icons/remove.svg';
import clone from '../../assets/icons/clone.svg';
import moveUp from '../../assets/icons/moveUp.svg';
import moveDown from '../../assets/icons/moveDown.svg';

export const Toolbar: FC<Props> = ({ itemId }) => {
  const { items } = useAppSelector(state => state.items);

  const dispatch = useAppDispatch();

  const handleMoveUp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(actions.moveUp(itemId));
  };
  
  const handleMoveDown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(actions.moveDown(itemId));
  };
  
  const handleClone = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const itemToClone = items.find(item => item.id === itemId);
    if (itemToClone) {
      const clonedItem = { ...itemToClone, id: uuidv4() };
      dispatch(actions.add(clonedItem));
    }
  };
  
  const handleDelete = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(actions.remove(itemId));
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar__item navigation">
        <a className="Toolbar__button" href="" onClick={handleMoveDown}>
          <img src={moveDown} alt="move down" />
        </a>
        <a className="Toolbar__button" href="" onClick={handleMoveUp}>
          <img src={moveUp} alt="move up" />
        </a>
      </div>
      <div className="Toolbar__item edit">
        <a className="Toolbar__button" href="" onClick={handleClone}>
          <img src={clone} alt="clone" />
        </a>
        <a className="Toolbar__button" href="" onClick={handleDelete}>
          <img src={remove} alt="remove"/>
        </a>
      </div>
    </div>
  );
};
