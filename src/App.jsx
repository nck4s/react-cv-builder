import React, {useState} from 'react';
import CVForm from './components/CVForm'
import './index.css';

function App() {
  return (
    <div className='App'>
      <h1>CV builder</h1>
      <CVForm />
    </div>
  );
}

export default App;
