import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Note = () => {


    const [show,setShow]=useState(false)
    const [note, setNote] = useState(localStorage.getItem("note") || " ");

    const SaveText = (e)=>{
        setNote(e.target.value)
        localStorage.setItem("note",e.target.value)
    }

    const handleOnCkick = (e)=>{
        const value = e.target.innerText;
        if (value=="Open Note") {
            setShow(true)

            e.target.innerText="Close Note"
            
        }else{
            setShow(false)
            e.target.innerText="Open Note"
        }
    }
    return (
        <div className='bg-inherit d-flex flex-column justify-content-center align-items-center '>

            {show?  (<Form.Control 
            as="textarea"
            value={note}
            style={{ height: '100px', backgroundColor: 'lightgreen', border: '1px ' }}
            onChange={SaveText}
            placeholder='your comments here'
            
        />):""}
            
            
        

    <button  type="button" className='btn btn-info mt-2' id="openNote" onClick={(e)=>{handleOnCkick(e)}}>Open Note</button>


        </div>
        
    );
}

export default Note