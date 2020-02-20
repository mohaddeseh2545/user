import React from "react";
import Modal from "../layout/modal";
import { Button } from "antd";
import { MangmentActions } from '../../action/Managment/action';
import { IMangmentState } from '../../action/Managment/model';
import { connect } from "react-redux";
import { IApplicationState } from "../../store/state";
import CreateFrom from "./CreateForm";
type IProps = typeof MangmentActions & IMangmentState;

class Final extends React.Component<IProps>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div>
                <Button
                    onClick={ () => this.props.toggleCreateOutPutModal(true)}
                >
                    open
                </Button>
                <Modal 
                   toggle={this.props.createOutputList.open} 
                   onCancel = {() => this.props.toggleCreateOutPutModal(false)}
                >
                    <CreateFrom />
                </Modal>
            </div>
        )
    }
}
export default connect(
    (state: IApplicationState) => state.managment,
    MangmentActions,
)(Final);

