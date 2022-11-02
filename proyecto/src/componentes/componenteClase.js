import React from "react";

class ComponentClass extends React.Component{
    constructor(){
        super();
        this.state = {
            cont : 0
        }

        setInterval(() => {
            this.setState({
                cont : this.state.cont + 1
            })
        },1000)
    }
    render(){
        return(
            <div>
                <h1>Estado: {this.state.cont}</h1>
            </div>
        )
    }
}

class ComponentClass2 extends React.Component{
    constructor(){
        super()
        this.state = {
            contad: 0
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.contad}</h2>
                <button onClick={()=> this.setState({contad: this.state.contad + 10})}>contador 2</button>
            </div>
        )
    }
}
export { ComponentClass,ComponentClass2}