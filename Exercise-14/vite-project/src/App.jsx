// App.jsx
import React from 'react';
import {
  DisplayImages,
  NovellLoginForm,
  ProfilePage
} from './Components';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>JSX Part II Tasks</h1>
      
      <hr />
      <DisplayImages />

      <hr />
      <NovellLoginForm />

      <hr />
      <ProfilePage />
    </div>
  );
}

export default App;
