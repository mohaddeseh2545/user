import { Action } from "redux";
import { usersActionTypes } from "./actionType";

export interface IUser {
    User: {
        data: {
                name:string;
                lastName:string
            }
    };

}


interface IformSubmit extends Action<string> {
    type: usersActionTypes.formSubmit;
    data: {name:string; lastName:string}
}

export type KnownAction =
    | IformSubmit
