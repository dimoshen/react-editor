import { FC, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { WorkplaceItem } from '../WorkplaceItem/WorkplaceItem';
import { useAppSelector } from '../../redux/hooks/hooks';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { actions } from '../../redux/features/items';

import './Workspace.scss';

export const Workspace: FC = () => {
  const { items } = useAppSelector(state => state.items);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handleActivate = (id: string) => {
    setActiveItemId(prevId => prevId === id ? null : id);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
  
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);
    
    dispatch(actions.set(reorderedItems));
  };

  useEffect(() => console.log(items), [items])

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="workspaceItems">
        {(provided) => (
          <ul
            className="Workspace"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <WorkplaceItem 
                      itemId={item.id}
                      toolType={item.toolName} 
                      isActive={item.id === activeItemId} 
                      onActivate={() => handleActivate(item.id)} 
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
