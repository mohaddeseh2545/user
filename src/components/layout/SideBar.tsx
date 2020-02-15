import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export class SideBar extends React.Component {
    render() {
        return (
            <div className="sideBar">
                <ul className="main-menu">
                    <li className="sub-menu">
                        <span >
                            <Link to="/GetUser">
                            نمایش کاربران
                            </Link>
                            
                            <i>
                                <FontAwesomeIcon icon={faUsers} size="1x" className="padding-left-10" />
                            </i>
                        </span>
                    </li>
                    <li className="sub-menu">
                        <span>
                            <Link to="/CreateUser" >
                                ایجاد کاربر
                            </Link>
                            <i>
                                <FontAwesomeIcon icon={faUser} size="1x" className="padding-left-10" />
                            </i>
                        </span>                        
                    </li>
                    <li  className="sub-menu">
                        <span>
                            <Link to="/Search" >
                            جستجوی کاربر
                            </Link>
                            <i>
                                <FontAwesomeIcon icon={faSearch} size="1x" className="padding-left-10" />
                            </i>
                        </span>                        
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar
