import React from 'react';
import logo from './logo.svg';
import './App.css';
import getAngularStory from './angular-to-react';
import { NgButton } from './Button';
import { NgButton2 } from './Button2';
import { NgAggregate } from './Aggregate';

function App() {
  let Button = getAngularStory(NgButton, 'app-root');
  let Button2 = getAngularStory(NgButton2, 'button2');
  let Button3 = getAngularStory(NgButton, 'app-root');
  let Aggregate = getAngularStory(NgAggregate, 'app-aggregate');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>test</p>
        <Button />
        <Button2 />
        <Button3 />
        <Aggregate />
      </header>
    </div>
  );
}

export default App;
