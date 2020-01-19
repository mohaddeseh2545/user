import React from 'react';
// import {UserAction} from '../../action/User/action';
// import {connect} from 'react-redux';
// import { IApplicationState } from '../../store/state';
import {IUsers} from './Index';
import Axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
 //type IProps = typeof UserAction & IUserState ;
 
interface IState{
    user: IUsers | null,
    
    validation: {
        [key:string]:any;
        name:{isValid: boolean; touch:boolean,msg:string};
        lastName:{isValid: boolean; touch:boolean,msg:string};
        code:{isValid: boolean; touch:boolean,msg:string};
        address:{isValid: boolean; touch:boolean,msg:string};
        phone:{isValid: boolean; touch:boolean,msg:string};

    }
}
class Create extends React.Component<any,IState>{

    constructor(props:any){
        super(props);
        this.state={
            user:null,
      
           validation:{
               name:{isValid:false, touch:false,msg:"نام را وارد کنید"},
               lastName:{isValid:false, touch:false,msg:"نام خاوادگی را وارد کنید"},
               code:{isValid:false, touch:false,msg:"کدملی را وارد کنید"},
               address:{isValid:false, touch:false,msg:"آدرس را وارد کنید"},
               phone:{isValid:false, touch:false,msg:"تلفن همراه را وارد کنید"},
           }
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
        if(this.state.user){
          
            this.CreateUser();
            this.onReset();
        }else{
            alert('no exist data in form')
        }
     
    }
    validationForm=(name:string,value:string)=>{
        let isValid = true;
        let msg: string = this.state.validation[name] ? this.state.validation[name].msg : ""
        if(value.trim().length === 0 ){
            isValid =false;
        }
        this.setState({
            // ...this.state,
            validation: {
                ...this.state.validation,
                [name]: {
                    touch:true,
                    isValid, msg
                }
            }
        })
    }
    
    onChangeHandler=(e:any)=>{
        let user: IUsers = {
            code:'',
            firstName:'',
            lastName:'',
            address:'',
            phone:'',

        }
        if(this.state.user) {
            user = this.state.user;
        }
        user[e.target.name] = e.target.value
        this.setState({user})
        this.validationForm(e.target.name, e.target.value)

    }
    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                <form className="UserCreate" onSubmit={this.sendData}>
                    <legend className="bg-legend">ایجاد کاربر</legend>   

                    <div className="userCreateContent">
                    <label>کد ملی</label><br />                   
                    <input 
                        type="text" 
                        name="code" 
                        value={this.state.user ?this.state.user.code : ''}
                        onChange={this.onChangeHandler}
                      
                    /> <br />

                    {
                     !this.state.validation.code.isValid &&
                     this.state.validation.code.touch && 
                      <div className="showError"> 
                        {this.state.validation.code.msg} 
                      </div>
                    }
                   
                   <label>نام</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.user ? this.state.user.firstName : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                    {
                        !this.state.validation.name.isValid && 
                         this.state.validation.name.touch && 
                        <div className="showError"> 
                         {this.state.validation.name.msg} 
                        </div>
                    }

                    <label>نام خانوادگی</label> 
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.user ? this.state.user.lastName : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                    {
                        !this.state.validation.lastName.isValid && 
                         this.state.validation.lastName.touch && 
                        <div className="showError"> 
                        {this.state.validation.lastName.msg} </div>
                    }

                    <label>تلفن همراه</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={this.state.user ? this.state.user.phone : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                    {
                        
                        !this.state.validation.phone.isValid &&
                         this.state.validation.phone.touch && 
                        <div className="showError"> 
                            {this.state.validation.phone.msg} 
                        </div>}

                    <label>آدرس</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={this.state.user ? this.state.user.address : ''}
                        onChange={this.onChangeHandler}
                    /><br />
                     {
                     this.state.validation.address.touch && 
                     !this.state.validation.address.isValid && 
                     <div className="showError"> 
                        {this.state.validation.address.msg} 
                     </div>}
                    
                    <div style={{margin:'0 auto'}}>
                    <input 
                        type="submit" 
                        value="ارسال" />
                    </div> 
                    </div>
                   
                    
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