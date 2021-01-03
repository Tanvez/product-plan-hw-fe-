import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { Item, Lane } from '../../types'

interface Props {
  lane:Lane;
  index:number;
}

const RoadMapItem: React.FC<Props> = ({lane, index}) => {
  return (
    <Draggable key={lane.id} draggableId={lane.id} index={index}>
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
          minWidth: "150px",
          backgroundColor: snapshot.isDragging
            ? "#263B4A"
            : "#456C86",
          color: "white",
          ...dragProvided.draggableProps.style,
        }}
      >{lane.content}
        {/* <LaneItem lane={lane} index={index}/> */}
      </div>
    )}
  </Draggable>
  )
}

// interface Props2 {
//   lane:Lane;
//   index:number;
// }

// const LaneItem:React.FC<Props2> = ({lane, index } )=> {
//   console.log('got here')
//   return (
//   // <div>{`${lane} ${index}`}</div>
//     <Droppable droppableId={lane.id} type={"ITEM"}>
//       {(dragProvided, snapshot) => (
//         <div
//           ref={dragProvided.innerRef}

//         >
//           {lane.items.map((answer, index) => {
//             return (
//               <Draggable
//                 key={answer.id}
//                 draggableId={answer.id}
//                 index={index}
//               >
//                 {(dragProvided, snapshot) => (
//                   <div
//                     ref={dragProvided.innerRef}
//                     {...dragProvided.draggableProps}
//                     style={{border: '1px solid black'}}
//                   >
//                     {answer.content}
//                   </div>
//                 )}
//               </Draggable>
//             );
//           })}
//           {dragProvided.placeholder}
//         </div>
//       )}
//     </Droppable>
//   );
// };

export default RoadMapItem
