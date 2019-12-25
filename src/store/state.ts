import { IUser } from "../action/model";

export interface IApplicationState {
    user : IUser
}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;
