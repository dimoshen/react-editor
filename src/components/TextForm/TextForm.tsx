import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { actions } from '../../redux/features/items';

import './TextForm.scss';

interface Props {
  itemId: string;
}

export const TextForm: FC<Props> = ({ itemId }) => {
  const { items } = useAppSelector(state => state.items);
  const itemContent = items.find((item => item.id === itemId))?.content || '';
  const [content, setContent] = useState(itemContent);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    setContent(itemContent);
  }, [itemContent]);

  const handleContentUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actions.updateContent({ id: itemId, content }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    dispatch(actions.updateContent({ id: itemId, content: e.target.value }));
  };

  return (
    <form className="TextForm" onSubmit={handleContentUpdate}>
      <input 
        type="text" 
        value={content} 
        onChange={handleContentChange}
        onClick={(e) => e.stopPropagation()}
        onBlur={handleContentUpdate}
      />
    </form>
  );
};
