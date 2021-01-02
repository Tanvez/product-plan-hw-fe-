import React from 'react';
import { Droppable, Draggable, } from 'react-beautiful-dnd';
import { Row } from '../../types';

interface Props {
  row: Row;
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  // isCombineEnabled?: boolean;
}

export const TimeLineList: React.FC<Props> = ({ listId, listType, row }) => (
  <Droppable
    droppableId={listId}
    type={listType}
  >
    {(dropProvided, snapshot) => (
      // drop area
        <div
        {...dropProvided.droppableProps}      
        style={{
          background: snapshot.isDraggingOver
            ? "lightblue"
            : "lightgrey",
          width: row.width,
          minHeight: row.height,
          borderStyle: snapshot.isDraggingOver ? "dotted" : "",
        }}
          ref={dropProvided.innerRef}
        >{row.label==="timeline" && row.bars.length===0?"drag here":""}
          {/* drag and drop items */}
          {row.bars.map((bar, index) => (
            <Draggable key={bar.id} draggableId={bar.id} index={index}>
              {(dragProvided, snapshot) => (
                	<div
                  ref={dragProvided.innerRef}
                  {...dragProvided.draggableProps}
                  {...dragProvided.dragHandleProps}
                  style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    minHeight: "50px",
                    maxWidth: (row.label ==="timeline"&&bar.content==="Add bar"?bar.width:"100vw"),
                    backgroundColor: snapshot.isDragging
                      ? "#263B4A"
                      : "#456C86",
                    color: "white",
                    ...dragProvided.draggableProps.style,
                  }}
                >
                  {bar.content}
                </div>
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </div>
    )}
  </Droppable>
);
