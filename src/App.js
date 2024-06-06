// src/App.js
import React from 'react';
import FormComponent from './components/FormComponent';
import './components/FormStyles.css';
function App() {
  return (
    <div className="App">
      <h1 className='hd'>Registration Form</h1>
      <br></br>
      <FormComponent />
    </div>
  );
}

export default App;
