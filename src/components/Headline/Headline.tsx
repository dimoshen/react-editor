import { FC } from 'react';

import './Headline.scss';


interface Props {
  content: string;
}

export const Headline: FC<Props> = ({ content }) => {
  return (
    <section className='Headline'>
      <h2 className='Headline__content'>
        {content}
      </h2>
    </section>
  );
};