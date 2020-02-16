import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const Alert = (props:any) => {

        // console.log('alert msg', props.alert);
        return(
           
            props.alert.msg !== ''  ?(
                <div className={`alert alert-${props.alert.type}`}>       
                {props.alert.msg}
                <FontAwesomeIcon icon={faInfoCircle} style={{paddingLeft:'10px'}} />
            </div>
            )
            : null      
        )
}
export default Alert;