import { FC } from 'react';

import './Paragraph.scss';

export const Paragraph: FC = () => {
  return (
    <section className='Paragraph'>
      <p className='Paragraph__content'>
        Prompt your customer to revisit your store by showing them the products they left behind.
        Consider offering them a coupon code to close the deal.
        Using the "Insert" panel on the right, drag and drop 
        the Abandoned Cart element onto the page below.
      </p>
    </section>
  );
};