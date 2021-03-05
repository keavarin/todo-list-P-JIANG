import React from 'react'
import './App.css'

function Card(props) {
    const deleteItem = (id)=> props.handleDelete(id)
    const nextItem = (id)=> props.handleNext(id)
    return (
        <div className="Card">
            <h3>{props.name}</h3>
            {props.list.map(x => (
            <div>
                <span>{x.id}: {x.task}</span>
                <button onClick={()=>deleteItem(x.id)}>Delete</button>
                {x.status !== 'Done' && <button onClick={()=>nextItem(x.id)}>Next</button>}
                {/* && ถ้าประโยคนี้เป็นtrueทำข้างหลังต่อ ถ้าข้างหน้าเปน false หยุดทำ*/}
            </div>
                
            ))}
        </div>
    )
}

export default Card
