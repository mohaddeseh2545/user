import React from 'react';
import Button from '../layout/Button';

interface IState{
    login:string;
    id:number;
    avatar_url:string;
    html_url:string;
}
type IProps = {
   
};
class User extends React.Component<IProps,IState>{

    constructor(props: IProps){
        super(props);
        this.state = {
            login:'Jack',
            id:0,
            avatar_url:'https://avatars3.githubusercontent.com/u/2775751?v=4',
            html_url:'https://github.com/Dogfalo'
        }
    }
    render(){
        return(
           
                <div className="card">
                    <img 
                        src={this.state.avatar_url} 
                        className="img-user"
                        alt="" 
                    />
                    <h3>{this.state.login}</h3>
                    <a 
                        href={this.state.html_url}
                        
                    >                       
                      {this.props.children}              
                    </a>
                </div>
            
        )
    }
}
export default User;