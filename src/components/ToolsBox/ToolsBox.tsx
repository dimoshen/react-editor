import { FC, useState, useEffect } from 'react';
import * as itemsApi from '../../api/items';
import { ToolType } from '../../types/ToolType';

import './ToolsBox.scss';
import { ToolsBoxItem } from '../ToolsBoxItem/ToolsBoxItem';


export const ToolsBox: FC = () => {
  const [tools, setTools] = useState<ToolType[]>([]);

  useEffect(() => {
    itemsApi.getAll()
      .then(toolsFromServer => {
        setTools(toolsFromServer);
      });
  }, [])

  return (
    <div className="ToolsBox">
      {tools.map(tool => (
        <ToolsBoxItem key={tool} toolType={tool} />
      ))}
    </div>
  );
};
