import { FC, useState, useEffect } from 'react';
import * as itemsApi from '../../api/items';
import { ToolbarItem } from '../ToolbarItem';
import { ToolType } from '../../types/ToolType';

import './Toolbar.scss';

export const Toolbar: FC = () => {
  const [tools, setTools] = useState<ToolType[]>([]);

  useEffect(() => {
    itemsApi.getAll()
      .then(toolsFromServer => {
        setTools(toolsFromServer);
      });
  }, [])

  return (
    <div className="Toolbar">
      {tools.map(tool => (
        <ToolbarItem key={tool} toolType={tool} />
      ))}
    </div>
  );
};
