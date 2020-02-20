import { UserReducer } from "../action/User/reducer";
import {bookReducer} from '../action/Book/reducer';
import {MangmentReducer} from "../action/Managment/reducer";

export const reducers = {
    user: UserReducer,
    book: bookReducer,
    managment: MangmentReducer,
};
