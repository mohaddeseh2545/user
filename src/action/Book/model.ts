import { Action } from "redux";
import { BookActionTypes } from "./actionType";

export interface IBook {
    CreateBook: {
        loading: boolean
    };

}


interface ICreateBook extends Action<string> {
    type: BookActionTypes.CreateBook;
    
}

export type KnownAction =
    | ICreateBook
