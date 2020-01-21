import React from 'react';
import Modal from './components/layout/modal';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Create from './components/users/Create';
import Index from './components/users/Index';
import Slider from './components/slider/Slider';
import Axios from 'axios';
import Button from './components/layout/Button';
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
interface IUsers{
  [key: string]: any,
      code:string,
      firstName:string,
      lastName:string,
      address:string,
      phone:string
}
interface IState{
  users:IUsers[],
  toggle:boolean,
}
class App extends React.Component <IProps,IState> {

  constructor(props:IProps){
    super(props);
   this.state={
     users:[],
     toggle:false,
   }
  
  }
 private onCancel=()=>{
   this.setState({toggle:false})
 }
 private onOk =()=>{
   alert('send');
   this.setState({toggle:false})

 }
  async componentDidMount(){
    const res = await Axios.get('https://jsonbox.io/box_7cafe54ee82c7a1827bb/userCollection');
    this.setState({users : res.data});
  }
  render(){
    return (
      <div className="App">
        <NavBar title="Navbar" icon="fa fa-github" />
        <div className="container">
          <div style={{margin:'10px',textAlign:'center'}}>
          <button onClick={()=>{this.setState({toggle:true})}} >ایجاد کاربر</button>
          </div>
          
          <Modal
            onOk={this.onOk}
            onCancel={this.onCancel}
            toggle={this.state.toggle}
            title="ایجاد کاربر"
          >
          </Modal>
          <Create />
          <Slider  users={this.state.users} />
          {/* <Index  /> */}
          {/* <button onClick={() => alert('open modal')}>Open Modal</button> */}
          <Modal />
        </div>
  
  
      </div>
    );
  }
 
}

export default App;
