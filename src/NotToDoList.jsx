import React, { useState } from 'react'
import FormComponent from './FormComponent'
import GoodComponent from './GoodComponent'
import BadComponent from './BadComponent'
import ErrorNotification from './ErrorNotification'
import Note from './Note'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const NotToDoList = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const [itemid,setItemId]=useState({})

  const handleClose = () => {
          setShow(false)
  };

  const handleDelete =()=>{
    deleteEntry(itemid.id)
    setShow(false)
  }


  const formLocalStorage = JSON.parse(localStorage.getItem("list"))
  const [taskList,setTaskList]=useState(formLocalStorage || []);
  localStorage.setItem("list",JSON.stringify(taskList))
  
  

  const switchTask = (itemid,type)=>{
  setTaskList(taskList.map( (item) => {
      if (item.id===itemid) {
          item.type = type;
      }
      return item;
  }))
}

const deleteEntry = (itemId) =>{
 
    setTaskList(taskList.filter((item)=>item.id !== itemId )) 
      
}

const tt=taskList.reduce((acc, item) => {
  return acc +parseFloat(item.hr);
}, 0)



  return (
    <>
  <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete : {itemid? itemid.task:""} ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete {itemid? itemid.task:""} {itemid.hr} hrs</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    <div className="wrapper pb-5">
        <div className="container">

        {display ? <ErrorNotification  errorMessage={errorMessage} />:""}
                <h1 className="text-center pt-5">Save your Time <i className="fa-solid fa-clock" ></i></h1>
                <h6 className='text-center  mb-5'>!!! Tracks on weekly basis</h6> 



                <Note />
      
          <FormComponent setTaskList={setTaskList} taskList={taskList} tt={tt} setDisplay={setDisplay} setErrorMessage={setErrorMessage} />

          <div className="row mt-5">

          <GoodComponent taskList={taskList} switchTask={switchTask} setShow={setShow} setItemId={setItemId}/>
          <BadComponent taskList={taskList}   switchTask={switchTask}  setShow={setShow} setItemId={setItemId}/>
          </div>

          <div className="alert alert-success">
  The total hrs allocated = <span id="totalHours">{tt}</span> hrs
</div>

    </div>
    </div>
    
    </>
  )
}

export default NotToDoList