

const BadComponent = ({taskList,switchTask,setShow,setItemId}) => {
const badList = taskList.filter(item=>item.type==="bad");
const badhrs=badList.reduce((acc, item) => {
  return acc +parseFloat(item.hr);
}, 0)


const handleDeleteButton = (itemId)=>{
  setShow(true);
  setItemId(itemId)
}
  return (
                    <div className="col-md ">
                        <h3 className="text-center">Bad list</h3>
                        <hr/>
                        <table className="table table-striped table-hover border fs-5" >
                        <tbody id="bad-list">
                        {
                              badList.map((item,i) => {
                                return ( <tr key={item.id}>
                                        <td>{i+1}</td>
                                        <td>{item.task}</td>
                                        <td>{item.hr}hrs</td>
                                        <td className="text-end">
                                            <button className="btn btn-danger" onClick={ ()=>handleDeleteButton(item.id)}><i className="fa-solid fa-trash"></i></button>
                                            
                                            <button className="btn btn-warning" onClick={()=>switchTask(item.id, 'entry')}>
                                                    <i className="fa-solid fa-arrow-left"></i>
                                                </button>
                                        </td>
                                        </tr>
                              ) })
                            
                        }    
                        </tbody>
                        </table>

                        {badhrs ? <div className="alert alert-success">
                            you could have saved = <span>{badhrs} </span> hrs
                        </div> : ""}
                        

                    </div>
  )
}

export default BadComponent