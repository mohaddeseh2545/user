import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

export class SideBar extends React.Component {
    render() {
        return (
            <div className="sideBar">
                <ul className="main-menu">
                    <li>
                        <span >
                            نمایش کاربران
                            <i>
                                <FontAwesomeIcon icon={faUsers} size="1x" className="padding-left-10" />
                            </i>

                        </span>

                    </li>
                    <li>
                    <span>
                    ایجاد کاربر
                            <i>
                                <FontAwesomeIcon icon={faUser} size="1x" className="padding-left-10" />
                            </i>

                        </span>
                        

                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar
