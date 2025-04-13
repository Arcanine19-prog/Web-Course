import React, {useState} from 'react'

const Form1 = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[subname,setsubName]=useState('')
    const[subemail,setsubEmail]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        // alert(`Name: ${name} Email: ${email}`)
        setsubName(name)
        setsubEmail(email)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Enter your name: </span>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br></br>
        <span>Rnter your email: </span>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        <button type='submit'>Submit</button>
      </form>

      <p>Name: {subname}</p>
      <p>Email: {subemail}</p>
    </div>
  )
}

export default Form1
