import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [password, setPassword] = useState("");
  const [isNumericAdded, setIsNumericAdded] = useState(false)
  const [isCharacterAdded, setIsCharacterAdded] = useState(false)
  const [length, setLength] = useState('8')

  useEffect(() => {
    stringFunction()
  },[isNumericAdded, length, isCharacterAdded])

  const stringFunction = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let characters = "+-*/!@#$%^&()\|{}[]"

    if(isNumericAdded && isCharacterAdded){
      string += number;
      string += characters;
    }else if(isNumericAdded){
      string += number;
    }else if(isCharacterAdded) {
      string += characters
    }

    // console.log("String is: ", string)

    for(let i=1; i<=length;i++){
      let charValue = Math.floor(Math.random() * string.length)
      pass +=  string.charAt(charValue);
    }
    console.log(pass)
    setPassword(pass)
    
  }

  return (
    <div>
      <div>
        <input type="text" value={password}/>
      </div>
      <div>
        <div>{length}</div>
        <input type='range' min='8' max='40' onChange={(e)=>setLength(e.target.value)}/>
        <input type='checkbox' onClick={()=>setIsNumericAdded((prev)=> !prev)}/>Number
        <input type='checkbox' onClick={()=>setIsCharacterAdded((prev)=> !prev)}/>Character
      </div>
    </div>
  )
}

export default App