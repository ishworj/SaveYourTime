import React from 'react'

const GoodComponent = ({taskList,switchTask,setShow,setItemId}) => {

  const entryList = taskList.filter(item=>item.type==="entry");

  const handleDeleteButton = (itemId)=>{
    setShow(true);
    setItemId(itemId)
  }

  return (
    <>
    <div className="col-md ">
                        <h3 className="text-center">Entry list</h3>
                        <hr/>
                        <table className="table table-striped table-hover border fs-5 " >
                        <tbody>
                        {
                          
                          entryList.map((item,i) => {
                          return    (
                                  <tr key={item.id}>
                                  <td >{i+1}</td>
                                  <td>{item.task}</td>
                                  <td>{item.hr}hrs</td>
                                  <td className="text-end">
                                      <button className="btn btn-danger" onClick={ ()=>handleDeleteButton(item)}><i className="fa-solid fa-trash"></i></button>
                                      
                                      <button className="btn btn-success" onClick={()=>switchTask(item.id, 'bad')}>
                                              <i className="fa-solid fa-arrow-right"></i>
                                          </button>
                                  </td>
                                  </tr>
                          )})
                        }
                        </tbody>
                        </table>
                    </div>
    </>
  )
}

export default GoodComponent