import React from 'react';
import Modal from './components/layout/modal';
import NavBar from './components/layout/NavBar';
import Create from './components/users/Create';
import { UserAction } from './action/User/action';
import { IUserState } from './action/User/model';
import Index from './components/users/Index';
import { connect } from 'react-redux';
import { IApplicationState } from './store/state';

const fakeList = [
  { id:0,name:'ali',family:'hasani'},
  { id:1,name:'reza',family:'ghanbari'},
  { id:2,name:'nahid',family:'rashidi'},
  { id:3,name:'shirin',family:'rostami'},
  { id:4,name:'ali',family:'hasani'},
  { id:5,name:'reza', family:'ghanbari'},
  { id:6,name:'nahid', family:'rashidi'},
];

type  IProps = typeof UserAction & IUserState;
interface IUsers{
  [key: string]: any,
      code:string,
      firstName:string,
      lastName:string,
      address:string,
      phone:string
}

class App extends React.Component <IProps> {

  constructor(props:any){
    super(props);
 
  }
 private onCancel=()=>{
   this.setState({toggle:false})
 }
 private onOk =()=>{
   alert('send');
   this.setState({toggle:false})

 }
  async componentDidMount(){
    this.props.GetUser();
   
  }
  render(){
    return (
      <div className="App">
        <NavBar title="Navbar" icon="fa fa-github" />
        <div className="container">
          <div style={{margin:'10px',textAlign:'center'}}>
          <button 
            onClick={()=>{this.setState({toggle:true})}} 
          >
            ایجاد کاربر
          </button>
          </div>
          
          <Modal
            onOk={this.onOk}
            onCancel={this.onCancel}
            toggle={this.props.userList.loading}
            title="ایجاد کاربر"
          >
           
          </Modal>
          <Create />
          {/* <Slider  users={this.props.userList.list} /> */}
          <Index {...this.props}  /> 
          <Modal />
        </div>
  
  
      </div>
    );
  }
 
}

//  export default App;
 export default connect(
  (state: IApplicationState) => state.user,
  UserAction,
)(App);
