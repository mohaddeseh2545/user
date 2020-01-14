import {Action} from "redux";
import {UserActionTypes} from './actionType';

export interface IUserState{
   
    CreateUser: {
        loading: boolean;
        open: boolean;

    }
    GetUserFetch: {
        loading:boolean;
        list:any[];
    }
}

interface ICreateUser extends Action<string>{
    type: UserActionTypes.CreateUser;
}
interface ICreateUserSuccess extends Action<string>{
    type: UserActionTypes.CreateUserSuccess;
   
}
interface ICreateUserFail extends Action<string>{
    type: UserActionTypes.CreateUserFail;
  
}

interface IGetUserFetch extends Action<string>{
    type: UserActionTypes.GetUserFetch;
}
interface IGetUserFetchSuccess extends Action<string>{
    type: UserActionTypes.GetUserFetchSuccess;
    list: any[];

}
interface IGetUserFetchFail extends Action<string>{
    type: UserActionTypes.GetUserFetchFail;
    
}
export type KnownAction =
| ICreateUser
| ICreateUserSuccess
| ICreateUserFail
| IGetUserFetch
| IGetUserFetchSuccess
| IGetUserFetchFail
