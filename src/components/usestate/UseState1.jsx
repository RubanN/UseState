import React,{useState} from 'react'

function UseState1(props) {
    const [count,setCount]=useState(function generate(){
        return Math.floor(Math.random()*100)
    })
    function clickHandler(){
        setCount(Math.floor(Math.random()*100))
    }
    return (
        <div style={{margin: 'auto', width: 100, display: 'block'}}>
            <h1>{count}</h1>
         <p>
         <button onClick={clickHandler}> Click </button>
          
             </p>            
        </div>
    )
}

export default UseState1
