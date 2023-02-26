import React, { useState } from 'react';

function InputField({sendTask}) {
  // const list = <div></div>
  const [input,setInput]=useState('');
  const handleChange=(event)=>{
    setInput(event.target.value);
  };
  const addTask=()=>{
    sendTask(input);
    // console.log(input);
    setInput('');
  }
  return (<div style={{display:"flex",gap:'10px'}}>
    <input type="text" value={input} onChange={handleChange}/>
    <button type="button" onClick={addTask}>Add</button>
  </div>);
}

export default InputField;