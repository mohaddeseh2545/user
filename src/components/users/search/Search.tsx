import React from 'react';
import { UserAction } from '../../../action/User/action';
import { IUserState } from '../../../action/User/model';
import { text } from '@fortawesome/fontawesome-svg-core';

interface IState{
    text:string;
    [ key :string ] : string;
}
type IProps = typeof UserAction & IUserState
class Search extends React.Component<IProps,IState>{
    constructor(props:IProps){
       super(props);
        this.state={
            text:"",
        }
    }
    onSubmit =(e:any)=>{
        e.preventDefault();
    }
    changeHandler=(e:any)=>{
        this.setState({ [e.target.name] : e.target.value });
    }
    render(){
        return(
            <React.Fragment>
                <form onSubmit={()=>this.onSubmit}>
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
                
               
            </React.Fragment>
        )
    }
}
export default Search;