import { FC } from 'react';

import { Image } from '../Image';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';

import { useAppSelector } from '../../redux/hooks/hooks';

import './Preview.scss';

export const Preview: FC = () => {
  const { items } = useAppSelector(state => state.items)

  return (
    <div className="Preview">
      {items.map((item) => {
        switch (item.toolName) {
          case 'headline':
            return <Headline key={item.id} />;
          case 'image':
            return <Image key={item.id} />;
          case 'paragraph':
            return <Paragraph key={item.id} />;
          case 'button':
            return <Button key={item.id} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
