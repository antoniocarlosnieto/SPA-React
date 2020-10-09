import React, {Component} from 'react';
import "../styles/topo.css"


class Topo extends Component {
    render(){
        return(

           
            
           <div className= "py-2 topo foto centro">

                <nav className="letra-vermelha fundo-barra">
                    <strong>
                         <a href= "#home">Home</a> | <a href= "#contato">Contato</a> | <a href= "#parceiros">Parceiros</a> | <a href= "#servicos">Serviços</a> | <a href= "#sobre">Sobre</a> | <a href= "#rodape">Rodape</a>
                    </strong>
                </nav>
          
                <p className="fonte-da-letra" className="letra-branca" ><h1><h1><strong>Banda Hugs</strong></h1></h1></p>
            
                <p id= "home"><h3>Fazendo a sua Festa</h3></p>

               

                

              
               
                
           </div>
        )
    }
}

export default Topo;
