import { FC } from 'react';
import './Toolbar.scss';

export const Toolbar: FC = () => {
  const handleMoveUp = () => {
    console.log('Move Up');
    // Тут можна додати логіку для переміщення вгору
  };

  const handleMoveDown = () => {
    console.log('Move Down');
    // Тут можна додати логіку для переміщення вниз
  };

  const handleClone = () => {
    console.log('Clone');
    // Тут можна додати логіку для клонування
  };

  const handleDelete = () => {
    console.log('Delete');
    // Тут можна додати логіку для видалення
  };

  return (
    <div className="Toolbar">
      <button onClick={handleMoveUp}>↑</button>
      <button onClick={handleMoveDown}>↓</button>
      <button onClick={handleClone}>Clone</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
