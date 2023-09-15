import { FC } from 'react';

import './Paragraph.scss';

interface Props {
  content: string;
}

export const Paragraph: FC<Props> = ({ content }) => {
  return (
    <section className='Paragraph'>
      <p className='Paragraph__content'>
        {content}
      </p>
    </section>
  );
};