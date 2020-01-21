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
                        <h6>
                        {this.props.title ? this.props.title : null}
                        </h6>
                        
                    </div>
                    
                    {this.props.children}
                    <div className="footer-modal">
                        <button  onClick={this.props.onCancel} className="modal-cancel">لغو</button>
                        <button onClick={this.props.onOk} className="modal-ok">ارسال</button>

                    </div>
                    
                </div>
            </React.Fragment>

        )
    }
}
export default Modal