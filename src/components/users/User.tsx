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
                    <h2>{this.props.user.code}</h2>
                    <h3>{this.props.user.firstname}</h3>
                    <h3>{this.props.user.lastName}</h3>
                    <h3>{this.props.user.phone}</h3>
                    <h3>{this.props.user.address}</h3>

                </div>
            
        )
    }
}
export default User;