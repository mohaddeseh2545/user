import {IBook} from "../action/Book/model";
import {IUserState} from '../action/User/model';
import { IMangmentState } from "../action/Managment/model";

export interface IApplicationState {
    user : IUserState;
    book: IBook;
    managment: IMangmentState;

}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;
