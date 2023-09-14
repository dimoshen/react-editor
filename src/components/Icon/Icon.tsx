import { FC, ReactNode } from 'react';
import { ReactSVG } from 'react-svg';

import headline from '../../assets/icons/headline.svg';
import image from '../../assets/icons/image.svg';
import paragparh from '../../assets/icons/paragraph.svg';
import { ToolType } from '../../types/ToolType';

import './Icon.scss';

interface Props {
  children?: ReactNode;
  size: number;
  type: ToolType;
}

export const Icon: FC<Props> = ({ children, size, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'headline':
        return headline;

      case 'image':
        return image;

      case 'paragraph':
        return paragparh;

      case 'button':
        return image;

      default:
        return '';
    }
  };

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      {children}
      <ReactSVG src={getIcon()} />
    </div>
  );
};
