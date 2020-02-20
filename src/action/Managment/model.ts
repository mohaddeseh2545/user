import {Action} from "redux";
import {MangmentActionTypes} from './actionType';

export interface IMangmentState {
    createOutputList: {
        open: boolean;
        loading: boolean;
    }
}
interface IToggleOutputModal extends Action<string>{
    type: MangmentActionTypes.ToggleOutputModal;
    open: boolean;
}

export type KnownAction = | IToggleOutputModal