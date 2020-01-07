import * as React from "react";
import '../../style/modal.css';

class Modal extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }
 
    render() {
        if (!this.props.toggle) {
            return null
        }
        return (
            <React.Fragment>
                <div className="bg-modal"></div>
                <div className="modal">
                    <h1>Hi Modal</h1>
                    <button onClick={() => this.setState({toggle : false})}>Close</button>
                </div>
            </React.Fragment>

        )
    }
}
export default Modal