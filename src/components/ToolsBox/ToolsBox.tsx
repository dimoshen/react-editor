import { FC, useState, useEffect, useMemo } from 'react';
import * as itemsApi from '../../../api/items';
import { Item } from '../../types/Item';
import { ToolsBoxItem } from '../ToolsBoxItem/ToolsBoxItem';

import './ToolsBox.scss';


export const ToolsBox: FC = () => {
  const [tools, setTools] = useState<Item[]>([]);

  useEffect(() => {
    itemsApi.getAll()
      .then(toolsFromServer => {
        setTools(toolsFromServer);
      })
      .catch(error => {
        console.error('Some error', error);
      });
  }, []);

  const memoizedTools = useMemo(() => tools, [tools]);

  return (
    <div className="ToolsBox">
      {memoizedTools.map(({id, tool}) => (
        <ToolsBoxItem key={id} toolType={tool} />
      ))}
    </div>
  );
};
