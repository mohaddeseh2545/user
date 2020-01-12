import React from 'react';
import logo from './logo.svg';
import Form from './components/form';
import CreateBook from './components/Book/create';
import Book from './components/Book/index';
import Modal from './components/layout/modal';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';

const App: React.FC = () => {
  const lastName:string = ''
  
  return (
    <div className="App">
      <NavBar title="Navbar"  icon="fa fa-github" />
      <Users />
      
      <CreateBook />
      <button onClick={()=> alert('open modal')}>Open Modal</button>
      <Modal />
      <Book />
    </div>
  );
}

export default App;
