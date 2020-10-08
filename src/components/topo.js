import React, {Component} from 'react';
// function Topo() {
//     return(
//         <header>
//             Este é o Cabeçalho!!!
//             <nav>
//                 <a>Home</a>
//                 <a>Sobre</a>
//             </nav>
//         </header>
//     );
// }

class Topo extends Component {
    render(){
        return(
           <div className= "py-5 bg-danger">
               <p>Acima de Tudo</p>
           </div>
        )
    }
}

export default Topo;
