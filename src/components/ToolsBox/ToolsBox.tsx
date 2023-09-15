import { FC, useState, useEffect, useMemo } from 'react';
import * as itemsApi from '../../api/items';
import { ToolType } from '../../types/ToolType';
import { ToolsBoxItem } from '../ToolsBoxItem/ToolsBoxItem';

import './ToolsBox.scss';


export const ToolsBox: FC = () => {
  const [tools, setTools] = useState<ToolType[]>([]);

  useEffect(() => {
    try {
      itemsApi.getAll()
        .then(toolsFromServer => {
          setTools(toolsFromServer);
        });
    } catch (error) {
      console.error('Some error', error);
    }
  }, []);

  const memoizedTools = useMemo(() => tools, [tools]);

  return (
    <div className="ToolsBox">
      {memoizedTools.map(tool => (
        <ToolsBoxItem key={tool} toolType={tool} />
      ))}
    </div>
  );
};
