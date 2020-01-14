import React from 'react';
import Axios from 'axios';
import Users from './Users';

export interface IUsers{
    [key: string]: any,
        code:string,
        firstName:string,
        lastName:string,
        address:string,
        phone:string
}
interface IState{
    users : IUsers[],
    loading:boolean,
  } 

type IProps={
   
}
class Index extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            users : [],
            loading:false,
          }
    }
    async componentDidMount (){
        this.setState({loading:true});
        const res = await Axios.get('https://jsonbox.io/box_7cafe54ee82c7a1827bb/userCollection');
        this.setState({loading:false, users: res.data});
      }
    render(){
        return(
            <React.Fragment>
               <Users loading={this.state.loading} users={this.state.users}/>
            </React.Fragment>
        )
    }
}
export default Index;