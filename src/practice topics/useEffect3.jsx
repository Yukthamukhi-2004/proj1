/*Write a component that takes a todo id as input and 
fetches the data for that todo from the
given endpoint and then renders it*/


import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";

function App(){
  return (
  <>
    <Todo id={1}/>
  </>    
  )
}

function Todo({id}){
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(response=>{
      setTodos(res.data.todo)
    })
  },[]);
  //    async function main(){
//   const res=await axios.get("https://sum-server.100xdevs.com/todo?id=1")
//      .then(res=>setTodos(res.data.todos))
//    }
//    }
    

  return <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
    

  </div>
}

export default App;


https://sum-server.100xdevs.com/todo?id=1