import React, { useEffect, useRef, useState } from 'react'

const LearnRef = () => {

    const [currentValue, setCurrentValue] = useState("");
    const previouseValue = useRef("");

    useEffect(() => {
        previouseValue.current = currentValue
    }, [currentValue])

  return (
    <div>
        <input
            type='text'
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}  
            placeholder='Enter Your value here'  
        />
        <h2>Current Value: {currentValue}</h2>
        <h2>Previous Value: {previouseValue.current}</h2>
    </div>
  )
}

export default LearnRef