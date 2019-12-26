import { userReducer } from "../action/reducer";
import {bookReducer} from '../action/Book/reducer';

export const reducers = {
    
    user: userReducer,
    book: bookReducer,
};
