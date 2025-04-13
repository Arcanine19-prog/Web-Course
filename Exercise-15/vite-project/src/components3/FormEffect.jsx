import React, {useRef,useState} from 'react'

const FormEffect = () => {
    const inputRef=useRef(null);
    const[name,setName]=useState('')
    const handleClick=() =>{
        inputRef.current.focus();
        setName(inputRef.current.value)
        
    }
  return (
    <div>
        <form>
            <span>Type your name:</span>
            <input type='text' ref={inputRef}></input>
            <br></br>
            <button type='button' onClick={handleClick}>Click Me</button>
        </form>
        <p>Your Name: {name}</p>
    </div>
  )
}

export default FormEffect
