// import logo from './logo.svg';
import { useState } from 'react';
import InputField from './Add-todo';
import './App.css';
import List from './List';

function App() {
  const [taskArr,addTaskArr]=useState([]);
  const deleteTask=(index)=>{
    const updatedArr=taskArr.filter((element,CurrentIndex) => 
       (CurrentIndex!==index)
    );
    addTaskArr(updatedArr)
}
  
  return (
    <div class="App">
      <h2>ToDo List</h2>
      <InputField sendTask={(task)=>addTaskArr([...taskArr,task])}/>
      
      <List taskList={taskArr} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
