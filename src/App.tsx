import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import CreateBook from './components/Book/create';
import axios from 'axios';

const App: React.FC = () => {
  const lastName:string = ''
  return (
    <div className="App">
      <CreateBook />
    </div>
  );
}

export default App;
