import React from 'react'



function Todo({todo, toggleComplete,removeTodo}) {

    function handelCheckboxClick() {
        toggleComplete(todo.id)
    }

    function handelRemoveClick() {
        removeTodo(todo.id)
    }

    return(
        <div style={{display: 'flex'}}>
       <input type="checkbox" onClick={handelCheckboxClick}/>

       <li style={{
           color: "white",
           textDecoration: todo.complted ? "line-through" : null
       }}
       >{todo.task}</li>
       <button onClick={handelRemoveClick}>X</button>
       </div>
    )
}


export default Todo