import React from 'react';

const BottomPart = (props) => {
        //array.isArray is a checker to see if its an array
    return(
        <div className="bottompart">
         {Array.isArray(props.todos) && props.todos.length > 0 ? 'Remaining ' + props.todos.length : 'No task, add task'}
         {console.log(props.todos)}
        </div>
    )
}

export default BottomPart
