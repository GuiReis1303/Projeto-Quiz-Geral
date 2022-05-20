import react, { useState } from 'react';
import Final from './Final';
import Inicio from './Inicio';
import Nivel from './Nivel';

function App() {
    require('./App.css');

    const [tela, alteraTela] = useState(null)

    if(tela == null){
        alteraTela(<Inicio alteraTela={alteraTela}/>);
    }

    return (
        <div>
            {tela}
        </div>
    );
}

export default App;
