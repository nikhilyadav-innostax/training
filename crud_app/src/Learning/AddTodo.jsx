import React, {memo} from 'react'

const AddTodo = ({todos, updateTodo}) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={updateTodo}>Add Todo</button>
      </>
    );
}

export default memo(AddTodo)