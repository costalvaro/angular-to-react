import React from 'react';
import logo from './logo.svg';
import './App.css';
import getAngularStory from './angular-to-react';
import { NgButton } from './Button';
import { NgButton2 } from './Button2';

function App() {
  let Button = getAngularStory(NgButton);
  let Button2 = getAngularStory(NgButton2);
  let Button3 = getAngularStory(NgButton);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Button2 />
        <Button3 />
      </header>
    </div>
  );
}

export default App;
