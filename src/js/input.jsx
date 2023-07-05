import React, { useState } from "react";
import BottomPart from "./bottomPart";


const InputBar = () => {
    const [todos, setTodos] = useState([])
    console.log(todos);
    //creates new todo 
    //todoinput is the name of the input, 
    //in the IF() todo is saying 'cleandishes' and 'CLEANDISHES' is the same so isNew is false because its not a new thing
    // 
    const createTask = (e) => {
        e.preventDefault()
        let newTodo = e.target.todoInput.value;
        let isNew = true;
        todos.forEach(todo => {
            if(todo.toLowerCase() === newTodo.toLowerCase()){
                isNew =false
            }
        })
        isNew ? setTodos([...todos, newTodo]) : alert('todo already exist')
        e.target.todoInput.value = ''
    }

    //how
    function removeTodo(e, index) {
        e.preventDefault();
        let filtered = todos.filter((todo, i) => i !== index);
        setTodos(filtered);
    }

    // using the <form> eliminates the need to make an enter function
    return(
        <div>
            <form onSubmit={createTask}>
            <input 
            className="input"
            name="todoInput" 
            type="text" 
            placeholder="add new task" 
            >
            </input>
            </form>

            <ul>
                {todos.map((todo,index)=> {
                    return(
                        <li className="theList d-flex justify-content-between"
                            key={index}>
                            {todo}
                            <button className='button mr-1 float-right end-0' type="button" onClick={(e) => removeTodo(e,index)}>
                            <i className="fas fa-times"></i>
                            </button>
                        </li>
                    )
                })}
            </ul>
            <BottomPart todos = {todos} />

        </div>
    );
}

export default InputBar
