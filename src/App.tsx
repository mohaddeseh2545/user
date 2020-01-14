import React from 'react';
import Modal from './components/layout/modal';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Create from './components/users/Create';
const App: React.FC = () => {
  const lastName: string = ''

  return (
    <div className="App">
      <NavBar title="Navbar" icon="fa fa-github" />
      <div className="container">
        
        <Create  />
        <button onClick={() => alert('open modal')}>Open Modal</button>
        <Modal />
      </div>


    </div>
  );
}

export default App;
