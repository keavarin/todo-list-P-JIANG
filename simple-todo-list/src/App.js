import './App.css';
import Header from './Header';
import Card from './Card';
import React, { useState } from 'react'

function App() {
  const [list, setList] = useState([
    {id: 1, task: 'Job1', status: 'Todo'},
    {id: 2, task: 'Job2', status: 'Doing'},
    {id: 3, task: 'Job3', status: 'Done'}
  ]);

  const handleDelete = id => setList(list.filter(item=> item.id !== id))
  //checkว่าidน้นเลขอะไร เชคเทียบกับidในlist 
  const handleNext = id => setList(
    list.map(item=> item.id === id? {...item, status: item.status === 'Todo'? 'Doing':'Done'}
    :item
    )
  )
  return (
    <div className="App">
      <Header list={list} setList={setList}/>
      <div className="card-area">
        <Card name="Todo" list={list.filter((item)=>item.status === 'Todo')} 
        handleDelete={handleDelete} handleNext={handleNext}/>
        <Card name="Doing" list={list.filter((item)=> item.status === 'Doing')}
        handleDelete={handleDelete} handleNext={handleNext}/>
        <Card name="Done" list={list.filter((item)=> item.status === 'Done')}
        handleDelete={handleDelete} handleNext={handleNext}/>
      </div>
      
    </div>
  );
}

export default App;
