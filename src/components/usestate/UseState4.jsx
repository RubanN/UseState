import React,{useState} from 'react'

function UseState4(props) {
    const [clicked,setClicked] = useState(false)
    

    function doClick(){
        console.log(doClick);
        props.onClick();
        setClicked(true)
    }
    return (
        <div>
            <button onClick={clicked ? undefined : doClick}
            disabled={clicked}
            >You Can Click Me Click</button>
        </div>
    )
}

export default UseState4
