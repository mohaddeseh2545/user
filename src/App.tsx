import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

interface IclassName {

  name: string,
  age: number
}
const App: React.FC = () => {
  const lastName:string = ''
  return (
    <div className="App">
       <Form />
    </div>
  );
}

export default App;
