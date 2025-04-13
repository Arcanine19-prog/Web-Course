import React, {useState,useEffect} from 'react'

const Joke = () => {
    const arr = ["agbnioergbve", "fagherhhgndfs", "ergetthgshtrwhthrtwhrgf", "gERG RGRFDGVDF", "ehqregfhsghfghfjf"];
    const [joke, setJoke] = useState('');
    
    const Generate= async ()=> {
        const index = Math.floor(Math.random() * arr.length);
        setJoke(arr[index]);
    }
    useEffect(() => {
      Generate();
    }, [ ])
    
    
    return (
         <div className='content'>
            <button onClick={Generate}>Generate Joke</button>
            <br />
            <p>{joke}</p>
        </div>
    );
}

export default Joke
