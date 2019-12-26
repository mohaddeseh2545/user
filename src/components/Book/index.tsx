import * as React from "react";
import { connect } from "react-redux";
import { BookAction } from '../../action/Book/action';
import { IBook } from '../../action/Book/model';
import { IApplicationState } from '../../store/state';


class Book extends React.Component<any,any>{

    render(){
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }
}


export default connect(
    (state: IApplicationState) => state.book,
    BookAction,
)(Book);
