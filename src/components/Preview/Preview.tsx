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
        switch (item) {
          case 'headline':
            return <Headline key={item} />;
          case 'image':
            return <Image key={item} />;
          case 'paragraph':
            return <Paragraph key={item} />;
          case 'button':
            return <Button key={item} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
