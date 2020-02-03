import React from 'react';
// import Modal from './components/layout/modal';
import NavBar from './components/layout/NavBar';
import { UserAction } from './action/User/action';
import { IUserState } from './action/User/model';
import { connect } from 'react-redux';
import { IApplicationState } from './store/state';
import Dashboard from './components/Dashboard/index';
import SideBar from './components/layout/SideBar';
import LeftSideBar from './components/layout/LeftSideBar';
import Footer from './components/layout/Footer';
const fakeList = [
  { id: 0, name: 'ali', family: 'hasani' },
  { id: 1, name: 'reza', family: 'ghanbari' },
  { id: 2, name: 'nahid', family: 'rashidi' },
  { id: 3, name: 'shirin', family: 'rostami' },
  { id: 4, name: 'ali', family: 'hasani' },
  { id: 5, name: 'reza', family: 'ghanbari' },
  { id: 6, name: 'nahid', family: 'rashidi' },
];

type IProps = typeof UserAction & IUserState;
interface IUsers {
  [key: string]: any,
  code: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string
}

class App extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
  }
  // private onCancel = () => {

  //   this.props.toggleUserCreateModal(false);
  // }
  // private onOk = (data:any) => {
  //   this.props.sendCreateUser(data)

  // }

  render() {
    return (
      <div className="App">
        {/* <NavBar title="Navbar" icon="fa fa-github" /> */}
        <NavBar />

        <div className="main-container">
          
            <SideBar />
            <LeftSideBar />
          <div className="wrapperContainer">

            <Dashboard {...this.props} />
          </div>
          {/* <div style={{ margin: '10px', textAlign: 'center' }}>
            <button
              onClick={() => this.props.toggleUserCreateModal(true)}
              className="createUser-btn"
            >
              ایجاد کاربر
          </button>
          </div> */}


          {/* <Modal
            onOk={this.onOk}
            onCancel={this.onCancel}
            toggle={this.props.CreateUser.openModal}
            title="ایجاد کاربر"
          >
            <Create2  />
          </Modal> */}

        </div>
        <Footer />


      </div>
    );
  }

}

// export default App;
export default connect(
  (state: IApplicationState) => state.user,
  UserAction,
)(App);
