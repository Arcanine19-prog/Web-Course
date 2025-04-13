import React , {useState}from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }
  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={Increment}>Inrease</button>

      <button onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default Counter
