import React from 'react';

class Form extends React.Component<any,any>{
    constructor(props:any) 
    {
      super(props)
      this.state = {
        firstName :'',
        lastName:'',
      }
    }
    sendData = (event:any) => {
        event.preventDefault();
        console.log('firstName: '+ this.state.firstName);
        console.log('lastName: '+ this.state.lastName);

    }
    changeHandlerName =(event:any)=>{
        this.setState({firstName: event.target.value})
    }
    changeHandlerLastName =(event:any)=>{
        this.setState({lastName: event.target.value})
    }
  render() {
      return(
          <React.Fragment>
              <form onSubmit={this.sendData}>
                  <legend>فرم</legend>
                    <label>نام</label>
                    <input type="text"  onChange={this.changeHandlerName} /><br />
                    <label> نام خانوادگی</label>
                    <input type="text" onChange={this.changeHandlerLastName} />
                    <input type="submit" value="ثبت" />
              </form>
          </React.Fragment>
      )
      
  }   
}

  export default Form;
  