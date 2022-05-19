import Inicio from './Inicio';

const Final = (props) => {

    const alteraTela = props.alteraTela;
    require('./Final.css')
    return( 
        <div className='inicio'>
            <div className='login'>
                <h2>Obrigado por jogar!</h2>
            <div> <p>
                    :)
              
                </p>
          </div>
                <div className='formulario'>
                   
                    <button onClick={() => alteraTela(<Inicio alteraTela={alteraTela}/>)}>Voltar</button>
                </div>
            </div>

            <div className='registrar'>

            </div>
        </div>
     );
}
 
export default Final;