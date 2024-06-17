import React, {useState, useRef, useEffect} from 'react'

const LearnContext = () => {
    const [inputValue, setInputValue] = useState(0);
    
    const ref = useRef(0);

    useEffect(() => {
        ref.current = ref.current + 1;
    })

    function handleClick() {
        ref.current++;
        console.log(ref.current)
    }
  
    return (
      <>
        <h1>Render Count: {inputValue}</h1>
        <h1>Render Count: {ref.current}</h1>
        <button onClick={handleClick}>Increment button</button>
      </>
    );
}   

export default LearnContext