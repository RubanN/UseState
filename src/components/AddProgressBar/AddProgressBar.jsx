import React,{useState,useEffect} from 'react'
let processInterval = null;
function AddProgressBar() {
    const [progress,setProgress] = useState(0);
    useEffect(()=>{
            processInterval=setInterval(()=>{
                setProgress(prev=>prev+1)
            },100)
    },[])
    useEffect(()=>{
        if(progress>=70){
            clearInterval(processInterval)
        }
    },[progress])
    return (
        <div classname="m-5">
      <h5 classname="mb-3">Progress Bar in React - <a href="https://cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h5>
      <div classname="progress w-50" style={{ height:"70"  }}>
        <div classname="progress-bar" role="progressbar" style={{ width:"40"  }}>{progress}%</div>
      </div>
    </div>
    )
}

export default AddProgressBar
