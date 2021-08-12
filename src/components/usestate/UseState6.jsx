import React,{useState} from 'react'

function UseState6() {
    const [items,setItems] = useState([]);
    const [itemName,setItemName] = useState("")

    const addItem = e=>{
        e.preventDefault();
        setItems([
            ...items,
            {
                id:items.length,
                name:itemName
            }
        ])
        setItemName("")
    }
    return (
        <div>
            <form onSubmit={addItem}>
                   <label>
                       <input
                       name="item"
                       type="text"
                       value={itemName}
                       onChange={e=>setItemName(e.target.value)}
                       />
                   </label>
            </form>
            <ul>
                {items.map((item)=>{
                    <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default UseState6
