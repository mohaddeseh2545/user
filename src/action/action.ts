import { AppAction } from "../store/state";
import { usersActionTypes } from "./actionType";
import { KnownAction } from "./model";

export const UserAction = {
   
    formSubmitHandler: (name:string, lastName:string): AppAction<KnownAction> => (dispatch, getState) => {
        dispatch({ type: usersActionTypes.formSubmit, data:{name,lastName} });
    },

};




