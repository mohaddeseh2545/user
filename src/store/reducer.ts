import { UserReducer } from "../action/User/reducer";
import {bookReducer} from '../action/Book/reducer';

export const reducers = {
    
    user: UserReducer,
    book: bookReducer,
};
