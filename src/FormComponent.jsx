import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = ({setTaskList,taskList,tt,setDisplay,setErrorMessage}) => {

    const [form,setForm]=useState({});

    const handleOnChange = (e)=>{
      const {name,value}=e.target;

      setForm({
        ...form,
        [name]:value,
        type:"entry"        

      })  
    }
    

    const handleOnSubmit = e =>{
      e.preventDefault();
      if ( !form.task || !form.hr ) {
        setErrorMessage("please complete the form")
        setDisplay(true);
        
        return
        
      }
      if ( tt>=24*7 || form.hr>168) {
        setErrorMessage("you have reached the weekly time hrs ");
        setDisplay(true);
        return
        
      }
      setTaskList([
        ...taskList,{...form,id:uuidv4()}
      ])
      setDisplay(false)
      
      
    }
  
  return (
    <>
    <form action=""  className="border p-5 rounded shadow-lg mt-5"  onSubmit={handleOnSubmit}>
                <div className="row g-2">
                    <div className="col-md-7">
                        <input type="text" className="form-control" placeholder="Task" aria-label="First name" name="task" 
                        onChange={handleOnChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="number" className="form-control" placeholder="40" min="1" aria-label="Last name" name="hr"
                        
                        onChange={handleOnChange} />
                    </div>

                    <div className="col-md-3 d-grid">
                        <button className="btn btn-primary">Add new task</button>
                    </div>
                    <p className='text-center'>Available hours : {(24*7)-tt} hrs</p>
                    </div>
                </form>

    </>
  )
}

export default FormComponent