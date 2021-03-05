import React, {useState} from 'react'

function Header(props){
    const [text, setText]= useState('')
    const handleAdd=()=>{
        props.setList([...props.list,
        {id: props.list[props.list.length-1].id +1, 
            // เอา idของตัวสุดท้ายคือ length ไป+1
            task: text,
            status: 'Todo' 
        }])
    }
    
    return (
        <div className="header">
            <p>Todo App: {text}</p>
            <div className>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                <button>Search</button> 
                <button onClick={handleAdd}>Add</button> 
            </div>
        </div>
    )
}
export default Header;