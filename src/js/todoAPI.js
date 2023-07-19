import React, { useEffect, useState } from "react";

const Api = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/Yvv1214", {
         method: "POST",
         body: JSON.stringify([]),
       headers: { "Content-type": "application/json" }
       })
       //turns it into json format 
         .then((response) =>{ 
         return response.json()})
       //then setpost value in to data
         .then((data) => {
         setPosts(data);
           console.log(data);
         })
         .catch((error) => console.log(error));
        } ,[]);

    const deleteTodo = async () => {
        const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/Yvv1214",{
         method:'DELETE',
         headers:{"Content-type": "application/json"} 
        })
        .catch((error) => console.log(error));
    }


    const addTodos = async () => {
        const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/Yvv1214", {
          method:'PUT',
          headers:{'Content-type': 'application/json'}
        })
      
    }


  return (
    <div>
      {/* {posts.map((post) => (<p>{post}</p>))} */}
    </div>
  );
};

export default Api;
