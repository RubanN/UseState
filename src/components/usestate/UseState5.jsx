import React,{useState} from 'react'

function UseState5({text,maxLength}) {
//  const [hidden,setHidden] = useState(true)

//   if(text.length <= maxLength){
//       return <span>{text}</span>
//   } 
// const [step,setStep]= useState(0);
// function increment(){
//     setStep(prev=>prev+1)
// }
 return (
       <span>
           {/* {hidden ? `${text.substr(0,maxLength).trim()}...` : text}
           {hidden ?(
               <a onClick={()=>setHidden(false)}>Read More</a>
           ):(
                <a onClick={()=>setHidden(true)}>Read less</a>
           
           )}  */}
           {/* <div>Today you've taken{step} steps</div>
           <br/>
           <button onClick={increment}>i took another step</button> */}
       </span>
    )
}

export default UseState5
