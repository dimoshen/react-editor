import { FC } from 'react';

import userImage from '../../assets/images/image.png';

export const Image: FC = () => {
  return (
    <section>
      <img src={userImage} alt="Your image here" />
    </section>
  );
};
