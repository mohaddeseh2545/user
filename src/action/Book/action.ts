import { AppAction } from "../../store/state";
import { BookActionTypes } from "./actionType";
import { KnownAction } from "./model";
import Axios from "axios";

export const BookAction ={
    BookCreate:(title:string, nameBook:string, date:string,author:string): AppAction<KnownAction> => async (dispatch, getState) => {
        dispatch({ type: BookActionTypes.CreateBook });
        const data ={
            title,
            nameBook,
            author,
            date
        }
        const res= await Axios.post('https://jsonbox.io/box_7cafe54ee82c7a1827bb/bookCollection',data)
    }
}


