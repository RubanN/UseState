import React,{useState} from 'react'

function UseState8() {
    const [form, setState] = useState({
        username: '',
        password: ''
      });
      const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password);
      };
      const updateField =e=>{
          setState({
              ...form,
              [e.target.name]: e.target.value
          })
      }

    return (
       <form onSubmit={printValues}>
            <label>
                Username: 
                <input 
                type="text" 
                name="username"
                  value={form.username}
                  onChange={updateField}

/>
            </label>
            <br/>
            <label>
                password: 
                <input  type="text" name="password"
                value={form.password}
                onChange={updateField}
                />
                </label>
                <br/>
                <button>Sumbit</button>
       </form>
    )
}

export default UseState8
