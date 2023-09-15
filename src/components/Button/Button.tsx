import { FC } from 'react';

import './Button.scss';

interface Props {
  content: string;
}

export const Button: FC<Props> = ({ content }) => {
  return (
    <button className='Button'>
      {content}
    </button>
  );
};
