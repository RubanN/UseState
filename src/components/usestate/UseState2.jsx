import React,{useState} from 'react'


// Without using object destructuring
// const messageState = useState( '' );
// const message = messageState.state;
// const setMessage = messageState
// const { state: message, setState: setMessage } = useState( '' );
// const { state: list, setState: setList } = useState( [] );
function UseState2() {
    // Using object destructuring
const [message, setMessage] = useState("")
    return (
        <div>
            <input type="text"
             placeholder="Enter some letters"
              value={message} 
              onChange={e=>{
              const val = e.target.val;
              setMessage(prev=>prev+val)}}/>
     <h1>{message}</h1>
        </div>
    )
}

export default UseState2
