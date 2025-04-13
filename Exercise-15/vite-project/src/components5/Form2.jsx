import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Form2 = ({name,email,number1,number2}) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numRef1=useRef(0);
    const numRef2=useRef(0);
    const [submittedName, setSubmittedName] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [submittedNumber, setSubmittedNumber] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedName(nameRef.current.value);
        setSubmittedEmail(emailRef.current.value);
        const num=parseInt(numRef1.current.value) + parseInt(numRef2.current.value )
        setSubmittedNumber(num);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Enter your name: </span>
                <input type='text' ref={nameRef} defaultValue={name} />
                <br />
                <span>Enter your email: </span>
                <input 
                    type='email' 
                    ref={emailRef} 
                    defaultValue={email}
                />
                <br />
                <span>Enter number-1: </span>
                <input type='number' ref={numRef1} defaultValue={number1}/>
                <br></br>
                <span>Enter number-2: </span>
                <input type='number' ref={numRef2} defaultValue={number2} />
                <button type='submit'>Submit</button>
            </form>

            {submittedName && submittedEmail && (
                <>
                    <p>Name: {submittedName}</p>
                    <p>Email: {submittedEmail}</p>
                    <p>Number: {submittedNumber}</p>
                </>
            )}
        </div>
    );
};

Form2.PropTypes={
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number1: PropTypes.number.isRequired,
    number2: PropTypes.number.isRequired,
};

Form2.defaultProps={
    name:' ',
    email:' ',
    number1: 0,
    number2: 0,
};


export default Form2;
