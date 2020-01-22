export enum UserActionTypes{

    CreateUser = "@@User/CreateUser",
    CreateUserSuccess = "@@User/CreateUserSuccess",
    CreateUserFail = "@@User/CreateUserFail",
    CreateUserOnModal ="@@User/CreateUserOnModal",
    
    GetUserFetch = "@@User/GetUserFetch",
    GetUserFetchSuccess = "@@User/GetUserFetchSuccess",
    GetUserFetchFail = "@@User/GetUserFetchFail",

    onResetFormModal="@@User/onResetFormModal",
}