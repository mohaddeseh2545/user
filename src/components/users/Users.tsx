import React from 'react';
import User from '../users/User';


type IProps={

}
class Users extends React.Component<IProps,any>{
    constructor(props:IProps){
        super(props);
        this.state={
            users:[
                {
                    login:'Jack',
                    id:0,
                    avatar_url:'https://avatars3.githubusercontent.com/u/2775751?v=4',
                    html_url:'https://github.com/Dogfalo'
                },
                {
                    login:'defunkt',
                    id:1,
                    avatar_url:'https://avatars0.githubusercontent.com/u/4?v=4',
                    html_url:'https://github.com/defunkt'
                },
                {
                    login:'ezmobius',
                    id:1,
                    avatar_url:'https://avatars0.githubusercontent.com/u/5?v=4',
                    html_url:'https://github.com/ezmobius'
                },
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}
export default Users;