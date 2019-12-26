import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import CreateBook from './components/Book/create';
import Book from './components/Book/index';

import axios from 'axios';

const App: React.FC = () => {
  const lastName:string = ''
  return (
    <div className="App">
      <CreateBook />
    <Book />
    </div>
  );
}

export default App;
