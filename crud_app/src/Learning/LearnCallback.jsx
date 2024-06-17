import React, {useCallback, useState} from 'react'
import AddTodo from './AddTodo';

const LearnCallback = () => {

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState(0);

    const handleChange = () => {
        setValue((v) => v + 1);
    }

    const updateTodo = useCallback(()=>{
        setTodos((t) => [...t, "New ToDo"])
    }, [todos])

  return (
    <div>
        <AddTodo todos={todos} updateTodo={updateTodo} />
        <div>
            {value}
            <button onClick={handleChange}>+</button>
        </div>
    </div>
  )
}

export default LearnCallback