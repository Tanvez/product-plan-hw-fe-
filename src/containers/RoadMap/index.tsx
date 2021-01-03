import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { generate } from 'shortid';
import { Timeline } from '../Timeline';
import { reorderRows, reorder } from '../../reorder';

// const timeline = generate();
// const sidebar = generate();
let itemsfrombackend = [
  "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/500px-Mario_SSBU.png",
  "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/500px-Peach_SSBU.png"
 
]
export const RoadMap = () => {
  // const [items, setItems] = React.useState(itemsfrombackend)
  const [rows, setRows] = React.useState([
    { 
      id:generate(),
      label:"timeline",
      bars:[],
      // width:"80vw",
      width:"50vw",
      height:"100px"
    },
    {
      id: generate(),
      label:"sidebar",
      bars:[
        { 
          id: generate(),
          content: "addLane",
          url: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/500px-Mario_SSBU.png",
          width:"100vw",
          items:[
            "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/500px-Mario_SSBU.png",
            "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/500px-Peach_SSBU.png"
           
          ]
        },
        { 
          id: generate(),
          content: "addBar",
          url: "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/500px-Peach_SSBU.png",
          width:"100px",
          items:[]
        }
      ],
      // width:"20vw",
      width:"50vw",
      height:"100vh"
    },
  ]);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%", width:'100%' }}>
      <DragDropContext
        onDragEnd={({type, destination, source }) => {
          // // dropped outside the list
          if (!destination) { 
            return;
          }
          // if (type==="CARD"){
            console.log({destination, source, type, rows})
            setRows(reorder(rows, source.index, destination.index));
          // }
          // if(type==="SUBITEM"){
            
          //   let found = rows[0].bars.find(e=>e.id===source.droppableId)
          //   console.log({found})
            // let index = rows[0].bars.findIndex(e=>e.id===source.droppableId)
            // const {id,label,bars,width, height} = rows[0]
            // const { id:barId, width:barWidth, content, url} = bars[0]
            // bars[index] = {
            //   id:barId,
            //   content,
            //   url,
            //   width:barWidth,
            //   items: reorder(found?.items, source.index, destination.index)
            // }
            // let newRowItem = {
            //   id,
            //   label,
            //   width,
            //   height,
            //   bars
            // }
            // setRows([newRowItem, rows[1]])
          // }
            // if(rows[1]?.bars.length<2){
            //   let copyRow = {...rows[0]}
            //   console.log({rows,copyRow})
            //   setRows([copyRow, {
            //     id: generate(),
            //     label:"sidebar",
            //     bars:[
            //       { 
            //         id: generate(),
            //         content: "addLane",
            //         url: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/500px-Mario_SSBU.png",
            //         width:"100vw",
            //         items:itemsfrombackend
            //       },{
            //         id: generate(),
            //         content: "addBar",
            //         url: "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/500px-Peach_SSBU.png",
            //         width:"100px",
            //         items:[]
            //       }],
            //       width:"20vw",
            //       height:"100vh" 
            //     }
            //   ])
            // }
          // } else {
          //   console.log(items)
          //   let timeline = rows.find((e,index)=>{
          //     return e.bars.find(item=>item.id===type)
          //   });
          //   reorder(timeline?.bars?.items, source.index, destination.index)
          //   let result  = timeline?.bars[0].items;
          //   console.log({rows,type, timeline, source, destination})
          //   console.log(reorder(result, source.index, destination.index))
          //   setItems(reorder(timeline.bars, source.index, destination.index))
          // }
          // if(!rows[1].bars.find(e=>e.content==="Add lane")){
          //   console.log(rows.length);
          // }
        }}
      >
        <Droppable droppableId="droppable" type="droppableItem">
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
              style={{
                backgroundColor:"pink",
                display: "flex",
                alignItems: "center",
                
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  // width: 500,
                  minHeight: 200,
                  borderStyle: snapshot.isDraggingOver ? "dotted" : "",
                
              }}
						>
              TESXT
          
          {rows.map((row,index )=> (
          	<div
						// style={{
						// 	display: "flex",
						// 	flexDirection: "column",
						// 	alignItems: "center",
						// }}
						key={row.id}
						>
              <Draggable key={row.id} draggableId={row.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    {row.label}
                    <span
                      {...provided.dragHandleProps}
                      style={{
                        display: "inline-block",
                        margin: "0 10px",
                        border: "1px solid #000",
                        height:200,
                        width:500
                      }}
                    >
                      Drag
                    </span>
                  </div>
                )}
              </Draggable>
                {/* <Timeline
                  internalScroll
                  key={row.id}
                  listId={row.id}
                  listType="CARD"
                  row={row}
                  index={index}
                /> */}
                {/* <Droppable
                  droppableId={row.id}
                  type="CARD"
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
                        drag and drop items
                        {row.bars.map((lane, index) => (
                          <RoadMapItem key={index} lane={lane} index={index} />
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
                                <img src={lane.url} style={{width:50, height:50}} {...dragProvided.dragHandleProps}/>
                                <LaneItem lane={lane} index={index}/>
                                <Droppable droppableId={lane.id} type={`SUBITEM`}>
                                  {(dragProvided, snapshot) => (
                                      <div
                                        ref={dragProvided.innerRef}
                                        style={{display:"flex"}}
                                      >
                                        {lane.items.map((item, idx) => {
                                          return (
                                            <Draggable
                                              key={item}
                                              draggableId={item}
                                              index={idx}
                                            >
                                              {(dragProvided, snapshot) => (
                                                <div
                                                  ref={dragProvided.innerRef}
                                                  {...dragProvided.draggableProps}
                                                  {...dragProvided.dragHandleProps}
                                                  style={{border: '1px solid black'}}
                                                >
                                                  <img style={{width:100}}src={item} />
                                                </div>
                                              )}
                                            </Draggable>
                                          );
                                        })}
                                        {dragProvided.placeholder}
                                      </div>
                                    )}
                                  </Droppable>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {dropProvided.placeholder}
                      </div>
                  )}
                </Droppable> */}
            </div>
          ))}
              {provided.placeholder}
            </div>)}
            
          </Droppable>
      </DragDropContext>
    </div>
  )
}
