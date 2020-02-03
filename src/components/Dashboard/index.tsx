import React from 'react';
// import { RouteComponentProps } from "react-router-dom";
import DoshboardRouter from "../Dashboard/Router";
// import { UserAction } from '../../action/User/action';
// import { IUserState } from '../../action/User/model';

// type IProps = typeof UserAction & IUserState;

export class Dashboard extends React.Component {
    // constructor(props:IProps){
    //     super(props);
    // }
    // async componentDidMount() {
    //     this.props.GetUserData();
    
    //   }
    render() {
        return (
            <div>
                <DoshboardRouter  />
            </div>
        )
    }
}

export default Dashboard
