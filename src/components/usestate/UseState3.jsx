import React,{useState} from 'react'

function UseState3() {
    //Using an object as a state variable with useState hook
  const [messageObj,setMessage]=useState({message:""})
    return (
        <div>
            <input type="text"
             value={messageObj.message}
             placeholder="Enter a message"
             onChange={e=>{
                 messageObj.message = e.target.value;
                 setMessage(messageObj)
             },console.log(messageObj)}
            />
            <p>
            <strong>{messageObj.message}</strong>

            </p>
        </div>
    )
}

export default UseState3
