import {Reducer} from 'redux';
import {MangmentActionTypes} from './actionType';
import {IMangmentState , KnownAction} from './model';

const unloadedState : IMangmentState = {
    createOutputList: {
        open: false,
        loading: false
    }
}
export const MangmentReducer: Reducer<IMangmentState, any> = (state: IMangmentState = unloadedState, action: KnownAction) => {
    switch(action.type){
        
        case MangmentActionTypes.ToggleOutputModal:{
            return{
                ...state,
                createOutputList :{
                    ...state.createOutputList,
                    open: action.open
                }

            }as IMangmentState

    }
}
    return state;
};