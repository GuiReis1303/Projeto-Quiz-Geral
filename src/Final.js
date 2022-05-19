import Inicio from './Inicio';

const Final = (props) => {

    const alteraTela = props.alteraTela;
    const certa = props.certa;
    const pontos = props.pontos + (certa ? 1 : 0);

    let cor = 'red'
    if(pontos > 4 && pontos <= 8){
        cor = 'amarelo'
    } else if(pontos > 8 && pontos <= 10){
        cor = 'verde'
    }

    require('./Final.css')
    return(
        <div className='inicio'>
            <div className='login'>
                <h2>Obrigado por jogar!</h2>
            <div>
                <p className={cor} id='pt'>{pontos} / 10</p>
          </div>
                <div className='formulario'>
                   
                    <button onClick="window.location.reload()">Voltar</button>
                </div>
            </div>

            <div className='registrar'>

            </div>
        </div>
     );
}
 
export default Final;