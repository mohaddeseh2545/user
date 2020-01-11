import React from 'react';
type IProps={

}

class Button extends React.Component<IProps,any>{
    constructor(props:IProps){
        super(props);
    }
   
    render(){
        
        return(
        <button         
        >
            {this.props.children}
        </button>
        )
    }
}
export default Button;