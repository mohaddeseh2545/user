import React from 'react';
import { UserAction } from '../../../action/User/action';
import { IUserState } from '../../../action/User/model';
import Alert from '../../layout/Alert';
import GetUsers from '../GetUsers';

interface IState{
    text:string;
    [ key :string ] : any;
    alert: { msg: string, type: string};
}
type IProps = typeof UserAction & IUserState
class Search extends React.Component<IProps,IState>{
    constructor (props: any ){
       super(props);
        this.state = {
            text:"",
            alert: {msg: '', type: ''},
        }
    }
 
    
    // submit
    onSubmit =(e:any)=>{
        e.preventDefault();
        if(this.state.text === ''){
            this.setState({ alert: { msg: 'کادر جستجو خالی می باشد' , type: 'light'} });
            setTimeout( ()=>{ this.setState({alert :{msg: '', type: ''}})} , 5000);
        }else{
          
        }
    }
    // change Handler
    changeHandler=(e:any)=>{
        this.setState({ [e.target.name] : e.target.value });
    }
    // search users
    // searchUsers = async (text: string) =>{
        
    // }
    render(){
        return(
            <React.Fragment>
                <Alert alert={this.state.alert} />
                <form onSubmit={this.onSubmit}>
                    <input 
                        className="searchInput"
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.changeHandler}
                        placeholder="جستجو ..."
                    />
                    <input
                        className="btnSearch"
                        type="submit"
                        value="جستجو"
                        
                    />
                </form>
                <GetUsers />
               
            </React.Fragment>
        )
    }
}
export default Search;