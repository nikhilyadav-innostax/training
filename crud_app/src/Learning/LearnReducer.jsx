import React, { useReducer } from 'react'

const initialValue = {
    count: 0,
};

const reducer = (state, dispatch) => {
    console.log(state, dispatch)
    if(dispatch.type === "Increment"){
        return { ...state, count: state.count + 1 };
    }
}

const LearnReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
        <div>{state.count}</div>
        <div>
            <p>Increment Button</p>
            <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        </div>
    </div>
  )
}

export default LearnReducer