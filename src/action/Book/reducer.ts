import { Reducer } from "redux";
import { BookActionTypes } from "./actionType";
import { IBook , KnownAction } from "./model";


const unloadedState: IBook = {
    
    CreateBook: {
       loading:false
    }

};


export const bookReducer: Reducer<IBook, any> = (
    state: IBook = unloadedState,
    action: KnownAction,
) => {
    switch (action.type) {
        case BookActionTypes.CreateBook: {
            return {
                ...state,
                CreateBook: {
                    ...state.CreateBook,
                    loading:true,
                },
            } as IBook;
        }

    }
    return state;
};
