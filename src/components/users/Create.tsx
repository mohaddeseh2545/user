import React from 'react';

class UserCreate extends React.Component<any,any>{
    render(){
        return(
            <React.Fragment>
                <form className="UserCreate">
                    <input type="number" name="code" />
                    <input type="text" name="firstName" />
                    <input type="text" name="lastName" />
                    <input type="text" name="phone" />
                    <input type="text" name="address" />
                </form>
            </React.Fragment>
        )
    }
}
export default UserCreate;