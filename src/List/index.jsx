export default function({taskList,deleteTask}){
    
    return (
        taskList.map((item,index)=><div style={{display:'flex',gap:'20px',margin:'5px'}}><li>{item}</li><button type="button" onClick={()=>deleteTask(index)}>Delete</button></div>)
    );
}