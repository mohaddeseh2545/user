import {AppAction} from '../../store/state';
import {MangmentActionTypes} from './actionType';
import {KnownAction} from './model';
import Axios from "axios";

export const MangmentActions = {

     toggleCreateOutPutModal : (open:boolean): AppAction<KnownAction> => async (dispatch, getState) =>{
         dispatch({type: MangmentActionTypes.ToggleOutputModal, open});
     },
    

}