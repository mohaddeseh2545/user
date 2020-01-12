import {Reducer} from 'redux';
import {UserActionTypes} from './actionType';
import {IUserState , KnownAction} from './model';

const unloadedState : IUserState = {
    CreateUser: {
        loading: false,
    },
    GetUserFetch: {
        loading:false,
        list:[],
    }
}
export const UserReducer: Reducer<IUserState> = (state: IUserState = unloadedState, action: KnownAction) => {
    switch(action.type){
        case UserActionTypes.CreateUser:{
            return{
                ...state,
                CreateUser :{
                    ...state.CreateUser,
                    loading: true,
                }

            }as IUserState
             
        }
        case UserActionTypes.CreateUserSuccess:{
            return{
                ...state,
                CreateUser :{
                    ...state.CreateUser,
                    loading: false
                }

            }as IUserState
             
        }
        case UserActionTypes.CreateUserFail:{
            return{
                ...state,
                CreateUser:{
                    ...state.CreateUser,
                    loading: false,
                }

            }as IUserState
             
        }
        case UserActionTypes.GetUserFetch:{
            return{
                ...state,
                GetUserFetch: {
                    ...state.GetUserFetch,
                    loading:true,
                }

            }as IUserState
             
        }
        case UserActionTypes.GetUserFetchSuccess:{
            return{
                ...state,
                GetUserFetch: {
                    ...state.GetUserFetch,
                    loading:false,
                    list:action.list,
                }

            }as IUserState
             
        }
        case UserActionTypes.GetUserFetchFail:{
            return{
                ...state,
                GetUserFetch: {
                    ...state.GetUserFetch,
                    loading:false,
                }

            }as IUserState
             
        }
    }
    return state;
};