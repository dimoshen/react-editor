import { FC, useState, useEffect } from 'react';
import * as itemsApi from '../../api/items';
import { ToolBoxItem } from '../ToolBoxItem/ToolBoxItem';
import { ToolType } from '../../types/ToolType';

import './ToolBox.scss';


export const ToolBox: FC = () => {
  const [tools, setTools] = useState<ToolType[]>([]);

  useEffect(() => {
    itemsApi.getAll()
      .then(toolsFromServer => {
        setTools(toolsFromServer);
      });
  }, [])

  return (
    <div className="ToolBox">
      {tools.map(tool => (
        <ToolBoxItem key={tool} toolType={tool} />
      ))}
    </div>
  );
};
