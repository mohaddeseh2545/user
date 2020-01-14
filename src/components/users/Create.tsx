import React from 'react';
import {UserAction} from '../../action/User/action';
import { IUserState } from '../../action/User/model';
import {connect} from 'react-redux';
import { IApplicationState } from '../../store/state';

type IProps = typeof UserAction & IUserState ;
interface IState{
    code:string;
    firstName:string;
    lastName:string;
    phone:string;
    address:string;
}
class UserCreate extends React.Component<IProps,IState>{

    constructor(props:any){
        super(props);
        this.state={
            code:'',
            firstName:'',
            lastName:'',
            phone:'',
            address:''
        }
    }
    componentDidUpdate(prevProps:IProps){
        // if(this.props.onResetForm && !prevProps.onResetForm ){
        //     this.onReset();
        // }
    }
    private onReset =()=>{
        this.setState({code:'',firstName:'',lastName:'',phone:'',address:''});
    
    }
    private sendData =(e : any)=>{
        
        e.preventDefault();
        this.props.CreateUser(this.state.code,this.state.firstName,this.state.lastName,this.state.phone,this.state.address);
        console.log(this.state.code,this.state.firstName,this.state.lastName,this.state.phone,this.state.address);
       this.onReset();
    }
    render(){
        return(
            <React.Fragment>
                <form className="UserCreate" onSubmit={this.sendData}>
                    <legend className="bg-legend">ایجاد کاربر</legend>
                    <input 
                        type="text" 
                        name="code" 
                        placeholder="کد ملی" 
                        value={this.state.code}
                        onChange={(e:any) => {this.setState({ code : e.target.value})}}
                    /> <br />
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="نام" 
                        value={this.state.firstName}
                        onChange={(e:any) => {this.setState({firstName: e.target.value})}}
                    /><br />
                       
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="نام خانوادگی" 
                        value={this.state.lastName}
                        onChange={(e:any) => {this.setState({lastName: e.target.value})}}
                    /><br />

                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="تلفن" 
                        value={this.state.phone}
                        onChange={(e:any) => {this.setState({phone: e.target.value})}}
                    /><br />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="آدرس"
                        value={this.state.address}
                        onChange={(e:any) => {this.setState({address: e.target.value})}}
                    /><br />
                    <input 
                        type="submit" 
                        value="Send" />
                </form>
            </React.Fragment>
        )
    }
}
export default connect(
    (state: IApplicationState) => state.user,
    UserAction,
)(UserCreate);