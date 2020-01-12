import { Action } from "redux";
import { BookActionTypes } from "./actionType";
import { UserActionTypes } from "../User/actionType";

export interface IBook {
    CreateBook: {
        loading: boolean
    };
    BookList:{
        loading:boolean,
        list:any[]
    }

}


interface ICreateBook extends Action<string> {
    type: BookActionTypes.CreateBook;
    
}
interface IBookList extends Action<string> {
    type: BookActionTypes.BookList;
    
}
interface IBookListSuccess extends Action<string> {
    type: BookActionTypes.BookListSuccess;
      
}
interface IBookListFail extends Action<string> {
    type: BookActionTypes.BookListFail;
    
}


export type KnownAction =
    | ICreateBook
    | IBookList
    | IBookListSuccess
    | IBookListFail
   