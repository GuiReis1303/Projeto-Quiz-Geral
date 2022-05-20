import react, { useState } from 'react';
import Nivel from './Nivel';

function App() {
    require('./App.css');

    const [tela, alteraTela] = useState(null)

    if(tela == null){
        alteraTela(<Nivel alteraTela={alteraTela}/>);
    }

    return (
        <div>
            {tela}
        </div>
    );
}

export default App;
