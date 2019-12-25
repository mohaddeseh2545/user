import { Reducer } from "redux";
import { usersAction } from "./actionType";
import { IUser, KnownAction } from "./model";

const unloadedState: IUser = {
    
    User: {
        data: {
                name:'',
                lastName:''
            }
    }

};

export const userReducer: Reducer<IUser, any> = (
    state: IUser = unloadedState,
    action: KnownAction,
) => {
    switch (action.type) {
        case usersAction.formSubmit: {
            return {
                ...state,
                User: {
                    ...state.User,
                    data: action.data
                },
            } as IUser;
        }

    }
    return state;
};
