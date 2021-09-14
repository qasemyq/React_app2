import React, {useState} from 'react';

import * as uuid from "uuid";

function TodoForm({addTodo}) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complted: false
    });

    function HandleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid.v4()})
            setTodo({...todo, task:''})
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
             type="text"
             value={todo.task} 
             onChange={HandleTaskInputChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}


export default TodoForm;