// Components.jsx
import React from 'react';
import SrcImage from './assets/sample.png';

// 1. Display images from public and src
export const DisplayImages = () => (
  <div>
    <h3>Images Display</h3>
    <img src="/Images/public-image.png" alt="Public" width={150} />
    <img src={SrcImage} alt="Src" width={150} />
  </div>
);

// 2. Novell Login Form
export const NovellLoginForm = () => (
  <form style={{ maxWidth: '400px', margin: 'auto' }}>
    <h2>Novell Services Login</h2>
    <label>Username: <input type="text" /></label><br /><br />
    <label>Password: <input type="password" /></label><br /><br />
    <label>City of Employment: <input type="text" /></label><br /><br />
    <label>Web server:
      <select>
        <option>--Choose a server--</option>
        <option>Server 1</option>
        <option>Server 2</option>
      </select>
    </label><br /><br />

    <p>Please specify your role:</p>
    {["Admin", "Engineer", "Manager", "Guest"].map((role) => (
      <label key={role}><input type="radio" name="role" /> {role}</label>
    ))}<br /><br />

    <p>Single Sign-on to:</p>
    {["Mail", "Payroll", "Self-service"].map((item) => (
      <label key={item}><input type="checkbox" /> {item}</label>
    ))}<br /><br />

    <button type="submit">Login</button>
    <button type="reset">Reset</button>
  </form>
);

// 3. Profile Page Components
export const ProfileImage = () => (
  <img src={SrcImage} alt="Profile" width={150} style={{ borderRadius: '50%' }} />
);

export const UserInfo = () => (
  <div>
    <h3>Prasenjit Choudhury</h3>
    <p>Email: choudhuryprasenjit81@gmail.com</p>
    <p>Bio: Frontend Developer</p>
  </div>
);

export const UserPosts = () => {
  const posts = ['Hello React', 'JSX Practice', 'Component Design'];
  return (
    <ul>
      {posts.map((post, i) => <li key={i}>{post}</li>)}
    </ul>
  );
};

export const ProfilePage = () => (
  <div style={{ textAlign: 'center' }}>
    <ProfileImage />
    <UserInfo />
    <UserPosts />
  </div>
);
