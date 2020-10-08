import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            contato: "51 985638588",
            email: "antoniocarlosnieto@gmail.com",
            ano: 2020,
            autor: "Antonio Nieto",
        };
    }



    render(){
        return (
            <footer className="footer border bg-warning">
                    <p>Fale Conosco: Telefone: {this.state.contato} - E-mail:{this.state.email}</p>
                    <p>Copyright@{this.state.ano} - {this.state.autor}</p>
            </footer>
        );
    }
}

export default Footer;
