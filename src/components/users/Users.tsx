import React from 'react';
import User from '../users/User';
import Axios from 'axios';
import {IUsers} from './Index';

type IProps={
    users: IUsers[];
    loading:boolean;
}
class Users extends React.Component<IProps,any>{
    constructor(props:IProps){
        super(props);
        
    }
  
    render(){
        return(
            <React.Fragment>
                <div className="">
                    {this.props.users.map(user=>(
                        <User key={user.code} user={user} />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default Users;