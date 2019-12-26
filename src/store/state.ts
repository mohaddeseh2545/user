import { IUser } from "../action/model";
import {IBook} from "../action/Book/model";

export interface IApplicationState {
    user : IUser;
    book: IBook;
}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;
