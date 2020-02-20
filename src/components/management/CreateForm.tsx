import React from "react";
import { Input, Form, Button } from "antd";
interface Ioutput {id: number, name: string, amount: string }

interface IState {
    list: Ioutput[];
}
class CreateFrom extends React.Component<any, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
        }
    }
    addInformation(){

    }
    addOutput(){
        const x = this.state.list;
        x.push( {id: x.length , name:'' , amount:''});
        this.setState({ list : x});
    }
    cutOutput(index : number){
        const x = this.state.list.filter( (l: Ioutput) => {
           return l.id !== index
        });
        this.setState({ list: x});
    }
    render() {
        return (
            <Form >
                
                {this.state.list.map((output, index) => {
                    console.log('index', index);
                   return  <div key={index}>
                        <Input
                            placeholder="نام"
                        />
                        <Input
                            placeholder="مبلغ"
                        />
                        <Input 
                            type="button" 
                            value="-" 
                            onClick={ () => this.cutOutput(index)}
                        />
                    
                    </div>
                    
                
                }

                )}
                <div className="add-user-output" >
                    <span 
                        className="btn-add-output"
                        onClick={() => this.addOutput()}>
                        اضافه کردن
                    </span>
                </div>
                
                <Button onClick={() => this.addInformation()}>ارسال</Button>
            </Form>
        )
    }
}
export default CreateFrom;