// components.jsx
import React, { Component, useState } from 'react';

// 1. (i) Without JSX
export const HelloReactNoJSX = () => {
  return React.createElement('h1', null, 'Hello, React!');
};

// 1. (ii) With JSX
export const HelloReactJSX = () => {
  return <h1>Hello, React!</h1>;
};

// 1. (iii) Message from variable
export const MessageComponent = () => {
  const message = 'Hello from a variable!';
  return <h1>{message}</h1>;
};

// 2. Render fruit list dynamically
export const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {fruits.map((fruit, i) => (
        <li key={i}>{fruit}</li>
      ))}
    </ul>
  );
};

// 3. Styled message with inline CSS
export const StyledMessage = () => {
  const style = { color: 'green', fontSize: '20px', fontWeight: 'bold' };
  return <p style={style}>Styled message using inline CSS!</p>;
};

// 4. Sum of squares
export const SumOfSquares = () => {
  const a = 3, b = 4;
  const sum = a * a + b * b;
  return <p>Sum of squares: {sum}</p>;
};

// 5. Conditional greeting
export const Greeting = ({ isMorning }) => {
  return <h2>{isMorning ? 'Good Morning' : 'Good Evening'}</h2>;
};

// 6. Current day display
export const CurrentDay = () => {
  const day = new Date().toLocaleString('en-US', { weekday: 'long' });
  return <p>Today is {day}</p>;
};

// 7. Prime number checker
export const PrimeChecker = ({ number }) => {
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  return <p>{number} is {isPrime(number) ? 'a prime number' : 'not a prime number'}</p>;
};

// 8. Temperature converter class component
export class TemperatureConverter extends Component {
  state = { temp: '', scale: 'C' };

  handleChange = (e) => {
    this.setState({ temp: e.target.value });
  };

  toggleScale = () => {
    this.setState({ scale: this.state.scale === 'C' ? 'F' : 'C', temp: '' });
  };

  convertTemp = () => {
    const { temp, scale } = this.state;
    const t = parseFloat(temp);
    if (isNaN(t)) return '';
    return scale === 'C' ? (t * 9) / 5 + 32 : ((t - 32) * 5) / 9;
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.temp} onChange={this.handleChange} />
        <button onClick={this.toggleScale}>Convert to {this.state.scale === 'C' ? 'Fahrenheit' : 'Celsius'}</button>
        <p>Converted Temperature: {this.convertTemp()}</p>
      </div>
    );
  }
}

// 9. Reverse string and palindrome checker
export const ReverseString = ({ str }) => {
  const reversed = str.split('').reverse().join('');
  const isPalindrome = str === reversed;
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? 'Palindrome' : 'Not a palindrome'}</p>
    </div>
  );
};

// 10. Random number generator
export const RandomNumber = () => {
  const [num, setNum] = useState(null);
  return (
    <div>
      <button onClick={() => setNum(Math.floor(Math.random() * 100) + 1)}>Generate Random Number</button>
      {num && <p>Random Number: {num}</p>}
    </div>
  );
};

// 11. Leap year checker
export const LeapYearChecker = ({ year }) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeap ? 'a leap year' : 'not a leap year'}</p>;
};

// 12. UserGreeting class component
export class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h1>Hello, {firstName} {lastName}!</h1>;
  }
}
