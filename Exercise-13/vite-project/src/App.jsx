// App.jsx
import React from 'react';
import {
  HelloReactNoJSX,
  HelloReactJSX,
  MessageComponent,
  FruitList,
  StyledMessage,
  SumOfSquares,
  Greeting,
  CurrentDay,
  PrimeChecker,
  TemperatureConverter,
  ReverseString,
  RandomNumber,
  LeapYearChecker,
  UserGreeting
} from './components';

function App() {
  return (
    <div>
      <HelloReactNoJSX />
      <HelloReactJSX />
      <MessageComponent />
      <FruitList />
      <StyledMessage />
      <SumOfSquares />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeChecker number={11} />
      <TemperatureConverter />
      <ReverseString str="level" />
      <RandomNumber />
      <LeapYearChecker year={2024} />
      <UserGreeting firstName="Prasenjit" lastName="Choudhury" />
    </div>
  );
}

export default App;
