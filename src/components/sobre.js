import React, {Component} from 'react';

// let list = [
//     {name: "joao", email: "joao@joao"},
//     {name: "jose", email: "jose@joao"},
//     {name: "joaquim", email: "joaquim@joao"},
//     {name: "josenildo", email: "josenildo@joao"},
//     {name: "joadir", email: "joadir@joao"},
//     {name: "jolinelson", email: "jolinelson@joao"},
// ];

class Sobre extends Component {
    
    constructor(props){
        super();
        this.state = {
            text: props.text,
            name: "Antonio Primeiro"

        };
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);


    }

   setName(){
       this.setState({
           name: "Antonius Nietus"
       });
   }

   resetName(){
    this.resetState({
        name: "Nietus Antonius"
    });
}




    render(){
        return (
            <div id="sobre" className="py-5 bg-success">
                Sobre
            <p>{this.state.text}</p>
            <p>Eu sou o {this.state.name}</p>
            <button onClick={this.setState.Name} className="bg-blue">Mudar Nome</button>
            </div>
        );
    }
}

export default Sobre;