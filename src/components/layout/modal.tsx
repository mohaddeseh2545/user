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
                    <div className="header-modal"> 
                        {this.props.title ? this.props.title : null}
                    </div>
                    <p>Hi Modal</p>
                    <div className="footer-modal">
                        <button onClick={this.props.onCancel}>Close</button>
                        <button onClick={this.props.onOk}>Send</button>

                    </div>
                    
                </div>
            </React.Fragment>

        )
    }
}
export default Modal