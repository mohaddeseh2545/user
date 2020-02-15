import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Alert = () => {
    return(
        <div className="alert-bg">
            
            کادر جستجو خالی است
            <FontAwesomeIcon icon={faInfoCircle} style={{paddingLeft:'10px'}} />
        </div>
    )
}
export default Alert;