import React from 'react';
import Button from '../layout/Button';
import {IUsers} from './Index';
type IProps = {
   user :IUsers
};
class User extends React.Component<IProps,any>{

    constructor(props: IProps){
        super(props);
       
    }
    render(){
        return(
           
                <div className="card">
                    <label>کد ملی</label><h3>{this.props.user.code}</h3><br/>
                    <label>نام </label><h3>{this.props.user.firstName}</h3><br/>
                    <label>نام خانوادگی </label><h3>{this.props.user.lastName}</h3><br/>
                    <label> تلفن </label><h3>{this.props.user.phone}</h3><br/>
                    <label> آدرس </label><h3>{this.props.user.address}</h3>

                </div>
            
        )
    }
}
export default User;