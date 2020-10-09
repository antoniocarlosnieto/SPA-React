import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Contato from "./components/contato";
import Footer from "./components/footer";
import Parceiros from "./components/parceiros";
import Servicos from "./components/servicos";
import Sobre from "./components/sobre";
import Topo from "./components/topo";


//o App puxa do .js que fica na pasta Component
//o .js puxa do .css que fica na pagina Style.




class App extends Component {
  render(){
    return(
      <div className= "App">
        <Topo></Topo>
        <Sobre text="Projeto feito com React em página única"></Sobre>
        <Servicos></Servicos>
        <Parceiros></Parceiros>
        <Contato></Contato>
        <Footer></Footer>
       
      </div>   
    );
  }

}


export default App;
