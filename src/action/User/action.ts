import {AppAction} from '../../store/state';
import {UserActionTypes} from '../User/actionType';
import {KnownAction} from '../User/model';
import Axios from "axios";

export const UserAction = {
     CreateUser : (code:string,firstName:string,lastName:string,phone:string,address:string) : AppAction<KnownAction> => async (dispatch, getState) =>{
        dispatch({ type : UserActionTypes.CreateUser});
        const data ={
            code,
            firstName,
            lastName,
            phone,
            address
        }
        const res = await Axios.post('https://jsonbox.io/box_7cafe54ee82c7a1827bb/bookCollection',data);
     },

     GetUser:(): AppAction<KnownAction> => async (dispatch , getState) =>{
         dispatch({type: UserActionTypes.GetUserFetch});
         const res = await Axios.get('https://jsonbox.io/box_7cafe54ee82c7a1827bb/bookCollection');
         if(res.data && res.status === 200){
             dispatch({type: UserActionTypes.GetUserFetchSuccess,list: res.data});
         }else {
             dispatch({type: UserActionTypes.GetUserFetchFail});
         }
     }
}