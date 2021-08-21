import React,{useState} from 'react'
import './index.css';

function DragDrop() {
  const [dnd,setDnd] = useState(false);
   const handleDragEnter = event =>{
       console.log('On Drag Enter >>>',event.target.className);
       setDnd(!dnd)
       console.log("setDnd--------9---->",setDnd);
   }
   const handleDragLeave = event =>{
       console.log('On Drag Leave >>>',event.target.className);
       setDnd(!dnd)
       console.log("setDnd--------14---->",setDnd);

    }
    return (
        <div>
        <h3>Handle drag over and out in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h3>
         <div className="box-container">
            <div className="box" onDragEnter={handleDragEnter}>
               Container
            </div>
            {dnd && <div className="drop-box" onDragLeave={handleDragLeave}>Drag & Drop Area</div>}
         </div>
        </div>
    )
}

export default DragDrop
