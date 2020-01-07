import React, { Fragment } from 'react';
import { IApplicationState } from '../../store/state';
import { connect } from 'react-redux';
import { BookAction } from '../../action/Book/action';
import { IBook } from '../../action/Book/model';
import Modal from '../layout/modal';


type IProps = typeof BookAction & IBook
interface Istate{
    title: string,
    nameBook:string,
    author:string,
    date:string,
    toggle:boolean,
}
class CreateBook extends React.Component<IProps,Istate>{
    constructor(props:any){
        super(props)
        this.state={
            title:'',
            nameBook:'',
            author:'',
            date:'',
            toggle:false,
        }
        }
        changeTitle = (event:any) =>{
            this.setState({title: event.target.value})
        }
        changeNameBook = (event:any) =>{
            this.setState({nameBook: event.target.value})
        }
        changeAuthor = (event:any) =>{
            this.setState({author: event.target.value})
        }
        changeDate = (event:any) => {
            this.setState({date: event.target.value})
        }
        Create = (event:any) =>{
            event.preventDefault();
            this.props.BookCreate(this.state.title,this.state.nameBook,this.state.author,this.state.date)
        }
        render(){
            return(
                <React.Fragment>
                    <form onSubmit={this.Create}>
                        <input type="text" name="title" placeholder="عنوان" onChange={this.changeTitle} /><br />
                        <input type="text" name="nameBook" placeholder=" نام کتاب" onChange={this.changeNameBook} /><br />
                        <input type="text" name="author" placeholder="نویسنده" onChange={this.changeAuthor} /><br />
                        <input type="text" name="date" placeholder="تاریخ" onChange={this.changeDate} /><br />
                        <input type="submit" value="درج اطلاعات" onClick={()=>this.setState({toggle : true})}/>
                        <Modal toggle={this.state.toggle}  />
                    </form>
                </React.Fragment>
            )
        }
}
export default connect(
    (state: IApplicationState) => state.book,
    BookAction,
)(CreateBook);