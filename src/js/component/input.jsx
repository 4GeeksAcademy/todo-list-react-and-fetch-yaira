import React, { useState } from "react";
import BottomPart from "./bottomPart";
import Api from "../todoAPI";


const InputBar = () => {
    const [todos, setTodos] = useState([])
    console.log(todos);
    //creates new todo 
    //todoinput is the name of the input, 
    //in the IF() todo is saying 'cleandishes' and 'CLEANDISHES' is the same so isNew is false because its not a new thing
    // 

    const addTodos = async (e) => {

        e.preventDefault()
        let newTodo = e.target.todoInput.value;
        let isNew = true;        
        todos.forEach(todo => {
            if(todo.toLowerCase() === newTodo.toLowerCase()){
                isNew =false
            }
        })
        const response = await fetch("https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/sombra", {
          method:'PUT',
          headers:{'Content-type': 'application/json'},
          body:JSON.stringify(todos)
        })
        .then((response)=> {
            response.status == 200 ? isNew : setTodos([...todos, newTodo]) ? alert('todo already exist') : e.target.todoInput.value = ''

        })
        .catch((error) => {
            console.log(error)
        })
    }

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
    const removeTodo = async (e, index) => {
        e.preventDefault();
        let filtered = todos.filter((todo, i) => i !== index);
        const response = await fetch("https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/sombra", {
            method:'PUT',
            headers:{'Content-type': 'application/json'},
            body:JSON.stringify(filtered)
          })
          .then((response)=> {
              response.status == 200 ? setTodos(filtered) : ''
  
          })
          .catch((error) => {
            console.log(error)
        })

    }

    // using the <form> eliminates the need to make an enter function
    return(
        <div>
            <form onSubmit={addTodos}>
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
            <Api todos = {todos} />

        </div>
    );
}

export default InputBar
