import * as React from "react";
import spinner from  "../../../style/images/spinner.gif";
class Spinner extends React.Component{
    render(){
        return(
            <React.Fragment>
                <img src={spinner} alt="loading..." style={{ display: 'block', width: '200px', margin: 'auto'}} />
            </React.Fragment>
        )
    }
}
export default Spinner;