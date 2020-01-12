import {IBook} from "../action/Book/model";
import {IUserState} from '../action/User/model';

export interface IApplicationState {
    user : IUserState;
    book: IBook;

}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;
