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
      {items.map((item, index) => {
        switch (item) {
          case 'headline':
            return <Headline key={index} />;
          case 'image':
            return <Image key={index} />;
          case 'paragraph':
            return <Paragraph key={index} />;
          case 'button':
            return <Button key={index} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
