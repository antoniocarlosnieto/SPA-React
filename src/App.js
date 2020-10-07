import React, {Component} from 'react';
import './App.css';
import Contato from "./components/contato"
import Footer from "./components/footer"
import Parceiros from "./components/parceiros"
import Servicos from "./components/servicos"
import Sobre from "./components/sobre"

//o App puxa do .js que fica na pasta Component
//o .js puxa do .css que fica na pagina Style.


class App extends Component {
  render(){
    return(
      <div className= "App">
        <p id= "home">Página de Exercício React</p>
        <a href= "#home">Home</a> | <a href= "">Contato</a> | <a>Parceiros</a> | <a>Serviços</a> | <a>Sobre</a> | <a>Rodape</a>

        <Sobre></Sobre>
        <Contato></Contato>
        <Parceiros></Parceiros>
        <Servicos></Servicos>
        <Footer></Footer>
        
      </div>   
    );
  }

}


export default App;
