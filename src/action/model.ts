import { Action } from "redux";
import { usersAction } from "./actionType";

export interface IUser {
    User: {
        data: {
                name:string;
                lastName:string
            }
    };

}


interface IformSubmit extends Action<string> {
    type: usersAction.formSubmit;
    data: {name:string; lastName:string}
}

export type KnownAction =
    | IformSubmit
