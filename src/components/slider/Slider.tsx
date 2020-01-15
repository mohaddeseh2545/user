import React from 'react';
type IProps = {
    fakeList: any[]
}
interface IPerson {name:string;family:string;id:number;} 

interface IState{
    step: number;
    person:IPerson | null;
    active:boolean;
}
class Slider extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state={
            step :0,
           person:null,
           active:false,
        }
    }
    handlerBtn =(step:number)=>{
        // if(step >= 0){
           this.setState({ step });
        // }
    }
    showData=(person:IPerson)=>{
        this.setState({person , active:true} )
        
    }
    render() {
       
        return (
            <React.Fragment>
                <div className="mainSlider">
                    <button 
                        className="rightBtn" 
                        onClick={()=>this.handlerBtn(this.state.step + 1)}
                        disabled={this.state.step > (this.props.fakeList.length - 5) ? true  : false}
                    >
                        
                        <span className="fa fa-angle-right"></span>
                    </button>

                    <div className="content"
                        style={ this.state.step > 0 ? {right: `${(this.state.step * -1)* 160}px`} : {right:`30px`}}
                    >
                        {this.props.fakeList.map((list,index) => {
                            let isActive = false;
                            if(this.state.active && this.state.person) {
                                if(this.state.person.id === list.id){
                                    isActive = true;
                                }
                            }
                           
                            return(
                                <div 
                                className="cardSilder"
                                style={{backgroundColor : 
                                    isActive  ? 'pink' : '#ccc'} }
                                 key={list.id} 
                                 onClick={()=>this.showData(list)}>
                                <p>{list.name}</p>
                                <p>{list.family}</p>
                            </div>
                            )
                        } 

                        )}
                    </div>
                    <button 
                        className="leftBtn"  
                        onClick={()=>this.handlerBtn(this.state.step - 1)} 
                        disabled={this.state.step === 0 ? true : false}
                    >
                        <span className="fa fa-angle-left"></span>
                    </button>



                </div>
                {this.state.person ? 
                <div>{this.state.person.name}</div>
                : null }
            </React.Fragment>
            
        )
    }
}
export default Slider;