import React from 'react';
// import {UserAction} from '../../action/User/action';
// import {connect} from 'react-redux';
// import { IApplicationState } from '../../store/state';
import {IUsers} from './Index';
import Axios from 'axios';
 //type IProps = typeof UserAction & IUserState ;
 
interface IState{
    user: IUsers | null,
    errorName: string,
    errorLastName: string,
    errorCode: string,
    errorAddress: string,
    errorPhone: string,

}
class Create extends React.Component<any,IState>{

    constructor(props:any){
        super(props);
        this.state={
            user:null,
           errorName:"نام را وارد کنید",
           errorLastName: "نام خانوادگی را وارد کنید",
           errorCode: "کد ملی را وارد کنید",
           errorAddress: "آدرس را وارد کنید",
           errorPhone: "تلفن را وارد کنید",
        }
    }
     CreateUser=()=>{
        
     const res =  Axios.post('https://jsonbox.io/box_7cafe54ee82c7a1827bb/userCollection',this.state.user)
            
    }
 
    private onReset =()=>{
        this.setState({user :null});
    
    }
    private sendData =(e : any)=>{
        
        e.preventDefault();
        this.CreateUser();
        this.onReset();
    }
    // validationForm=(name,value)=>{
        
    // }
    onChangeHandler=(e:any)=>{
        let user: IUsers = {
            code:'',
            firstName:'',
            lastName:'',
            address:'',
            phone:''
        }
        if(this.state.user) {
            user = this.state.user;
        }
        user[e.target.name] = e.target.value
        this.setState({user})

    }
    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                <form className="UserCreate" onSubmit={this.sendData}>
                    <legend className="bg-legend">ایجاد کاربر</legend>
                    <label>کد ملی</label><br />
                    <input 
                        type="text" 
                        name="code" 
                        placeholder="کد ملی" 
                        value={this.state.user ?this.state.user.code : ''}
                        onChange={this.onChangeHandler}
                       
                    /> <br />
                    {this.state.user && !this.state.user.code && <div> {this.state.errorCode} </div>}
                   
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="نام" 
                        value={this.state.user ? this.state.user.firstName : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                       
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="نام خانوادگی" 
                        value={this.state.user ? this.state.user.lastName : ''}
                        onChange={this.onChangeHandler}
                    /><br />

                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="تلفن" 
                        value={this.state.user ? this.state.user.phone : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="آدرس"
                        value={this.state.user ? this.state.user.address : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                    <input 
                        type="submit" 
                        value="Send" />
                </form>
            </React.Fragment>
        )
    }
}
export default Create;
// export default connect(
//     (state: IApplicationState) => state.user,
//     UserAction,
// )(UserCreate);