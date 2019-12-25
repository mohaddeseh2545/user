import { AppAction } from "../store/state";
import { usersAction } from "./actionType";
import { KnownAction } from "./model";

export const AtabatHotelActions = {
   
    toggleAtabatHotelDisplayModal: (name:string, lastName:string): AppAction<KnownAction> => (dispatch, getState) => {
        dispatch({ type: usersAction.formSubmit, data:{name,lastName} });
    },

};



