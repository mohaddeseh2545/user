import { Reducer } from "redux";
import { BookActionTypes } from "./actionType";
import { IBook , KnownAction } from "./model";


const unloadedState: IBook = {
    
    CreateBook: {
       loading:false
    },
    BookList:{
        loading:false,
        list:[]
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
        case BookActionTypes.BookList: {
            return {
                ...state,
                BookList: {
                    ...state.BookList,
                    loading:true,
                },
            } as IBook;
        }
        case BookActionTypes.BookListSuccess: {
            return {
                ...state,
                BookList: {
                    ...state.BookList,
                },
            } as IBook;
        }
        case BookActionTypes.BookListFail: {
            return {
                ...state,
                BookList: {
                    ...state.BookList,
                    loading:false,
                
                },
            } as IBook;
        }

    }
    return state;
};
