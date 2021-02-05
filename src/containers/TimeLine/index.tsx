import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { generate } from 'shortid';
import { TimeLineList } from '../../components/TimelineList';
import { reorderRows } from '../../reorder';

const timeline = generate();
const sidebar = generate();

export const TimeLineContainer = () => {
  const [rows, setRows] = React.useState([
    {
      id: timeline,
      label: "timeline",
      bars: [],
      width: "80vw",
      height: "100px",
    },
    {
      id: sidebar,
      label: "sidebar",
      bars: [
        {
          id: generate(),
          content: "Add lane",
          url:
            "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/500px-Mario_SSBU.png",
          width: "100vw",
        },
        {
          id: generate(),
          content: "Add bar",
          url:
            "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/500px-Peach_SSBU.png",
          width: "100px",
        },
        {
          id: generate(),
          content: "Add lane1",
          url:
            "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/500px-Mario_SSBU.png",
          width: "100vw",
        },
      ],
      width: "20vw",
      height: "100vh",
    },
  ]);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%", width:'100%' }}>
      <DragDropContext
        onDragEnd={async ({ destination, source }) => {
          // // dropped outside the list
          if (!destination) { 
            return;
          }
          if(!rows[1].bars.find(e=>e.content==="Add lane")){
            console.log(rows.length);
          }
          setRows(reorderRows(rows, source, destination));
        }}
      >
          {rows.map(row => (
          	<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
						key={row.id}
						>
              <div style={{border: '1px solid black', }}>
                <TimeLineList
                  internalScroll
                  key={row.id}
                  listId={row.id}
                  listType="CARD"
                  row={row}
                />
              </div>
            </div>
          ))}
      </DragDropContext>
    </div>
  )
}
