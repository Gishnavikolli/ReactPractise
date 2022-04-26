import React from "react";
import { TodoItem } from '../Components/TodoItem';


export const Todos = (props) => {
    let myStyle = {
        minnHeight: "70vh",
      };
  return (
    
    <div className="container my-3" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>  
      {props.todos.length === 0 ? (
        <>
          <h3 className="alert alert-info text-center">
            "No Todos To Display"
          </h3>
        </>
      ) : (
        props.todos.map((todo) => {
          return (
              <>
              <TodoItem todo={todo} key={props.sno} onDelete={props.onDelete} />
              </>

          );
        })
      )}
     </div>
  );
};
