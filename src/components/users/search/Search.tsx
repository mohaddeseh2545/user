import React from 'react';

class Search extends React.Component<any,any>{

    onSubmit =()=>{

    }
    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="جستجو ..."
                 />
                 <input
                  type="submit"
                  value="Search"
                 />
                </form>
                
               
            </React.Fragment>
        )
    }
}
export default Search;