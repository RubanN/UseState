import React,{useState} from 'react'

function UseState7() {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const printValues =e=>{
          e.preventDefault();
          console.log(userName,setUserName);
    };
    return (
      <form onSubmit={printValues}>
          <label>
              Username:
              <input type="text" 
               value={userName}
               onChange={e=>setUserName(e.target.value)}
               name="username"
               type="text"
              />
          </label>
          <br/>
          <label>
              Password:
              <input
               type="password" 
              value={password}
              onChange={e=>setPassword(e.target.value)}
              name="password"
              />
          </label>
          <br/>
          <button type="submit">Submit</button>
      </form>
    )
}

export default UseState7
