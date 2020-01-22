import {AppAction} from '../../store/state';
import {UserActionTypes} from '../User/actionType';
import {KnownAction} from '../User/model';
import Axios from "axios";
import { IUsers } from '../../components/users/Index';

export const UserAction = {
     sendCreateUser : (data:IUsers) : AppAction<KnownAction> => async (dispatch, getState) =>{
        dispatch({ type : UserActionTypes.CreateUser});
        
        const res = await Axios.post('https://jsonbox.io/box_7cafe54ee82c7a1827bb/userCollection',data);
        if(res.data.ok){
            dispatch({type: UserActionTypes.CreateUserSuccess});
            
        }else{
            dispatch({type: UserActionTypes.CreateUserFail});
        }
     },

     toggleUserCreateModal : (open:boolean): AppAction<KnownAction> => async (dispatch, getState) =>{
         console.log('open',open);
         dispatch({type: UserActionTypes.CreateUserOnModal, open});
     },
     GetUserData:(): AppAction<KnownAction> => async (dispatch , getState) =>{
         dispatch({type: UserActionTypes.GetUserFetch});
         const res = await Axios.get('https://jsonbox.io/box_7cafe54ee82c7a1827bb/userCollection');
         if(res.data && res.status === 200){
             dispatch({type: UserActionTypes.GetUserFetchSuccess, list: res.data});
         }else {
             dispatch({type: UserActionTypes.GetUserFetchFail});
         }
     }
}