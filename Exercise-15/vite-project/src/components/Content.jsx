import React, { useState } from 'react';

const Content = () => {
    const arr = ["agbnioergbve", "fagherhhgndfs", "ergetthgshtrwhthrtwhrgf", "gERG RGRFDGVDF", "ehqregfhsghfghfjf"];
    const [joke, setJoke] = useState('');

    function Generate() {
        const index = Math.floor(Math.random() * arr.length);
        setJoke(arr[index]);
    }

    return (
        <div className='content'>
            <button onClick={Generate}>Generate Joke</button>
            <br />
            <p>{joke}</p>
        </div>
    );
}

export default Content;
