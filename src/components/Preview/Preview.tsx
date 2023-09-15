import { FC } from 'react';

import { Image } from '../Image';
import { Headline } from '../Headline';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';

import { useAppSelector } from '../../redux/hooks/hooks';

import './Preview.scss';

export const Preview: FC = () => {
  const { items } = useAppSelector(state => state.items);

  return (
    <div className="Preview">
      {items.map(({id, toolName, content}) => {
        switch (toolName) {
          case 'headline':
            return <Headline key={id} content={content} />;
          case 'image':
            return <Image key={id} />;
          case 'paragraph':
            return <Paragraph key={id} content={content}/>;
          case 'button':
            return <Button key={id} content={content} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
