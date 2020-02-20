import * as React from "react";

class Modal extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }

    render() {
       
        return (
                
                <div className={this.props.toggle ?  "modal modalActive"  : "modal"}>

                    <div className="bg-modal">
                    
                    </div>
                    <div className="wrapper-modal">
                        <div className="header-modal">
                            <h6 style={{margin:'0'}}>
                            {this.props.title ? this.props.title : null}
                            </h6>
                            
                        </div>
                        <div className="body-modal">
                        {this.props.children}
                        </div>                       
                        <div className="footer-modal">
                            <button  onClick={this.props.onCancel} className="modal-cancel">لغو</button>
                            {this.props.onOk ? 
                            <button onClick={this.props.onOk} className="modal-ok">ارسال</button>
                            : null}

                        </div>
                    
                    </div>
                    
                </div>

        )
    }
}
export default Modal