import React from 'react';
import { UserAction } from '../../action/User/action';
import { IUserState } from '../../action/User/model';
import Spinner from '../layout/spinner/Spinner';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';


type IProps = typeof UserAction & IUserState;

class GetUsers extends React.Component<IProps>{
    constructor( props: any ){
        super(props);
    }
    async componentDidMount() {
        this.props.GetUserData();
    }
    render(){
        if(this.props.userList.loading){
            return <Spinner />
        }
        return(
            <React.Fragment>
                {this.props.userList.list.map((user,index)=>{
                    <div className="card-user" key={index}>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>

                    </div>
                }

                )}
            </React.Fragment>
        )
    }
}
export default connect(
    (state: IApplicationState) => state.user,
    UserAction,
)(GetUsers);
