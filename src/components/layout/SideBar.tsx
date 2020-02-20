import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export class SideBar extends React.Component {
    render() {
        return (
            <div className="sideBar">
                <ul className="main-menu">
                    <li className="sub-menu">                     
                            <Link to="/GetUser">
                            نمایش کاربران
                            </Link>                            
                            <i>
                                <FontAwesomeIcon icon={faUsers} size="1x" className="padding-left-10" />
                            </i>                      
                    </li>
                    <li className="sub-menu">                    
                            <Link to="/CreateUser" >
                                ایجاد کاربر
                            </Link>
                            <i>
                                <FontAwesomeIcon icon={faUser} size="1x" className="padding-left-10" />
                            </i>                                              
                    </li>
                    <li  className="sub-menu">                      
                            <Link to="/Search" >
                            جستجوی کاربر
                            </Link>
                            <i>
                                <FontAwesomeIcon icon={faSearch} size="1x" className="padding-left-10" />
                            </i>                                               
                    </li>
                    <li  className="sub-menu">                      
                            <Link to="/Final" >
                            مدیریت
                            </Link>
                            <i>
                                <FontAwesomeIcon icon={faList} size="1x" className="padding-left-10" />
                            </i>                                               
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar
