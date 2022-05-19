import Nivel from './Nivel';

const Inicio = (props) => {

    const alteraTela = props.alteraTela;
    require('./Inicio.css')
    return( 
        <div className='inicio'>
            

            <div className='login'>
                <h2>Bem-vindo ao Quiz sobre Futebol</h2>
                <p>
                    Você está preparado para testar os seus conhecimentos sobre Futebol em 4 níveis diferentes? 
                    Se sim, coloque seu nome abaixo para conseguir aparecer no rank dependendo de sua pontuação
                    e clique em começar para escolher um nível. Boa sorte!
                </p>
                <div className='formulario'>
                    <p>Digite seu Nome:</p><input/><br/>
                    <button onClick={() => alteraTela(<Nivel alteraTela={alteraTela}/>)}>Jogar</button>
                </div>
            </div>

            <div className='registrar'>

            </div>
        </div>
     );
}
 
export default Inicio;