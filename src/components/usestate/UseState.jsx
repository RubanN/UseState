import React,{useState} from 'react'

function UseState() {
   const [count,setCount] = useState(0);
   
    return (
        <div>
       <h1>You are clicking {count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default UseState
