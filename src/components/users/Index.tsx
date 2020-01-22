import React from 'react';
import { UserAction } from '../../action/User/action';
import { IUserState } from '../../action/User/model';
import Slider from '../slider/Slider';


type IProps= typeof UserAction & IUserState;

export interface IUsers{
    [key: string]: any,
        code:string,
        firstName:string,
        lastName:string,
        address:string,
        phone:string
};

class Index extends React.Component<IProps>{
    constructor(props:any){
        super(props);
        
    }
    async componentDidMount (){
        
        this.props.GetUserData();
      }
    render(){
        return(
            <React.Fragment>
              <Slider  users={this.props.userList.list}  />
            </React.Fragment>
        )
    }
}
export default Index;