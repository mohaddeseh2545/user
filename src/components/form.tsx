import React from 'react';
import { IApplicationState } from '../store/state';
import { connect } from 'react-redux';
import { UserAction } from '../action/action';
import { IUser } from '../action/model';


type IProps = typeof UserAction & IUser
class Form extends React.Component<IProps,any>{
    constructor(props:any) 
    {
      super(props)
      this.state = {
        firstName :'',
        lastName:'',
      }
    }
    sendData = (event:any) => {
        event.preventDefault();
        console.log('firstName: '+ this.state.firstName);
        console.log('lastName: '+ this.state.lastName);
        this.props.formSubmitHandler(this.state.firstName, this.state.lastName)

    }
    changeHandlerName =(event:any)=>{
        this.setState({firstName: event.target.value})
    }
    changeHandlerLastName =(event:any)=>{
        this.setState({lastName: event.target.value})
    }
  render() {
    console.log(this.props.User)
      return(
          <React.Fragment>
              <form onSubmit={this.sendData}>
                  <legend>فرم</legend>
                    <label>نام</label>
                    <input type="text"  onChange={this.changeHandlerName} /><br />
                    <label> نام خانوادگی</label>
                    <input type="text" onChange={this.changeHandlerLastName} />
                    <input type="submit" value="ثبت" />
              </form>
          </React.Fragment>
      )
      
  }   
}

  
  export default connect(
    (state: IApplicationState) => state.user,
    UserAction,
)(Form);