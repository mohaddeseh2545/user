import React from 'react';
 
// type IProps ={
//     icon : string;
//     title : string;
// }

class NavBar extends React.Component<any,any>{

    render(){
        return(
            <React.Fragment>
                <nav className="navBar">
{/*                   
                    <h1>
                        <i className={this.props.icon} style={{paddingRight: '5px'}} ></i>
                        {this.props.title}
                    </h1> */}
                    
                </nav>
            </React.Fragment>
        )
    }
}
export default NavBar;