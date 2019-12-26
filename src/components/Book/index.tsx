import * as React from "react";
import { connect } from "react-redux";
import { BookAction } from '../../action/Book/action';
import { IBook } from '../../action/Book/model';
import { IApplicationState } from '../../store/state';

type IProps = IBook & typeof BookAction ;
class Book extends React.Component<IProps,any>{
    constructor(props:any){
        super(props);
    }
    componentDidMount(){
        this.props.GetListBook();
    }
    render(){
        console.log(this.props.BookList)
        return(
            <React.Fragment>
               {
                this.props.BookList.list.map( b => (<p>{b.title}</p>
                    )
                    
                    )
               }
            </React.Fragment>
        )
    }
}


export default connect(
    (state: IApplicationState) => state.book,
    BookAction,
)(Book);
