import React,{useState} from 'react'

function UseState10() {
    const [count,setCount] = useState(0);
    const [objectCount,setObjectCount] = useState({count:0});
    return (
        <div>
          <h1>Count</h1>
          <p>You clicked {count} times</p> 
          <button onClick={()=>setCount(count+1)}>Increase normal count</button>           
         <h2>Object Count</h2>
         <p>You clicked {objectCount.count} times</p>
         <button
        onClick={() => {
          objectCount.count += 1;
          setObjectCount(objectCount);
        },console.log(objectCount)}
      >
        Broken increase of the object count
      </button>
      <br/>
      <br/>
    <button onClick={()=>setObjectCount({...objectCount,
                 count: objectCount.count + 1,

    })} >        Functioning increase of the object count
</button>

 
        </div>
    )
}

export default UseState10
