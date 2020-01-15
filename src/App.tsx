import React from 'react';
import Modal from './components/layout/modal';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Create from './components/users/Create';
import Index from './components/users/Index';
import Slider from './components/slider/Slider';

const fakeList = [
  { id:0,name:'ali',family:'hasani'},
  { id:1,name:'reza',family:'ghanbari'},
  { id:2,name:'nahid',family:'rashidi'},
  { id:3,name:'shirin',family:'rostami'},
  { id:4,name:'ali',family:'hasani'},
  { id:5,name:'reza', family:'ghanbari'},
  { id:6,name:'nahid', family:'rashidi'},
];

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
          <Slider fakeList={fakeList} />
          {/* <Index  /> */}
          {/* <button onClick={() => alert('open modal')}>Open Modal</button> */}
          <Modal />
        </div>
  
  
      </div>
    );
  }
 
}

export default App;
