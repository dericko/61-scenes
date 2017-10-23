import React, { Component } from 'react';
import {
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar
} from 'react-bootstrap';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">61 Scenes</h1>
    </header>
  );
};

const Items = () => {
  return (
    <div className="Items">
      <ButtonToolbar>
        <ToggleButtonGroup
          vertical
          type="radio"
          name="options"
          defaultValue={1}
        >
          <ToggleButton value={1}>Scene 1</ToggleButton>
          <ToggleButton value={2}>Scene 2</ToggleButton>
          <ToggleButton value={3}>Scene 3</ToggleButton>
          <ToggleButton value={4}>Scene 4</ToggleButton>
          <ToggleButton value={5}>Scene 5</ToggleButton>
          <ToggleButton value={6}>Scene 6</ToggleButton>
          <ToggleButton value={7}>Scene 7</ToggleButton>
          <ToggleButton value={8}>Scene 8</ToggleButton>
          <ToggleButton value={9}>Scene 9</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>
  );
};

const Editor = () => {
  return (
    <div className="Editor">
      <textarea className="Editor-textarea" />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Items />
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
