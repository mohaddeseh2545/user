import React from 'react';
import Modal from './components/layout/modal';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Create from './components/users/Create';
import Index from './components/users/Index';

type  IProps ={

};
class App extends React.Component <IProps,any> {

  constructor(props:IProps){
    super(props);
   
  }
 
  render(){
    return (
      <div className="App">
        <NavBar title="Navbar" icon="fa fa-github" />
        <div className="container">
          
          <Create/>
          <Index  />
          <button onClick={() => alert('open modal')}>Open Modal</button>
          <Modal />
        </div>
  
  
      </div>
    );
  }
 
}

export default App;
