import * as React from "react";

class Modal extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }

    render() {
       
        return (
            <React.Fragment>
                <div className={this.props.toggle ?  "modal modalActive"  : "modal"}>
                    <div className="header-modal"> 
                        {this.props.title ? this.props.title : null}
                    </div>
                    
                    {this.props.children}
                    <div className="footer-modal">
                        <button  onClick={this.props.onCancel} className="modal-cancel">Close</button>
                        <button onClick={this.props.onOk} className="modal-ok">Send</button>

                    </div>
                    
                </div>
            </React.Fragment>

        )
    }
}
export default Modal