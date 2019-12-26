import { Action } from "redux";
import { BookActionTypes } from "./actionType";

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
interface IBookCreateSuccess extends Action<string> {
    type: BookActionTypes.BookCreateSuccess;
    data: any[]
    
}

export type KnownAction =
    | ICreateBook
    | IBookList
    | IBookCreateSuccess

