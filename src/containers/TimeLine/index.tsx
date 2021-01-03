import React from 'react';
import { Draggable, Droppable, } from 'react-beautiful-dnd';
import { Row } from '../../types';
import RoadMapItem from '../../components/RoadMapItem';

interface Props {
  row: Row;
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  index:number;
}

export const Timeline: React.FC<Props> = ({ listId, listType, row }) => (
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
          {row.bars.map((lane, index) => (
            <RoadMapItem key={index} lane={lane} index={index} />
          ))}
          {dropProvided.placeholder}
        </div>
    )}
  </Droppable>
);

// export const Timeline: React.FC<Props> = ({ listId, listType, row, index }) => (
//   <Draggable key={listId} draggableId={listId} index={index}>
//     {(provided, snapshot) => (
//       <div>
//       <div
//         ref={provided.innerRef}
//         {...provided.draggableProps}
//       >
//         {row.label}
//         <span
//           {...provided.dragHandleProps}
//           style={{
//             display: "inline-block",
//             margin: "0 10px",
//             border: "1px solid #000",
//           }}
//         >
//           Drag
//         </span>
//       </div>
//       {provided.placeholder}
//     </div>
//     )}
//   </Draggable>
// );